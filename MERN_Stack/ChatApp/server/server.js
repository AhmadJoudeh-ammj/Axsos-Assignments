const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configure CORS for Socket.io
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Enable CORS for Express
app.use(cors());

// Store chat messages and rooms
let chatMessages = [];
let chatRooms = {
  'general': [],
  'random': [],
  'coding': []
};
let connectedUsers = {};

// Basic route
app.get('/', (req, res) => {
  res.send('Socket.io Chat Server is running!');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Nice to meet you. (shake hand)');
  
  // Send welcome message to the connected client
  socket.emit('welcome', 'Welcome to the MERN Socket.io Chat! Connection established successfully.');
  
  // Handle user joining with a name
  socket.on('user_joined', (data) => {
    const { username, room = 'general' } = data;
    connectedUsers[socket.id] = { username, room };
    
    // Join the specified room
    socket.join(room);
    
    // Send past messages from the room to the new user (Sensei Bonus)
    socket.emit('past_messages', chatRooms[room] || []);
    
    // Notify others in the room that user joined
    const joinMessage = {
      id: Date.now(),
      username: 'System',
      message: `${username} has joined the chat`,
      timestamp: new Date().toISOString(),
      room: room,
      type: 'system'
    };
    
    // Add to room messages
    if (!chatRooms[room]) chatRooms[room] = [];
    chatRooms[room].push(joinMessage);
    
    // Broadcast to all users in the room
    io.to(room).emit('new_message_from_server', joinMessage);
    
    console.log(`${username} joined room: ${room}`);
  });
  
  // Handle new chat messages
  socket.on('new_message_from_client', (data) => {
    const user = connectedUsers[socket.id];
    if (!user) return;
    
    const messageData = {
      id: Date.now(),
      username: user.username,
      message: data.message,
      timestamp: new Date().toISOString(),
      room: user.room,
      type: 'user'
    };
    
    // Add to room messages
    if (!chatRooms[user.room]) chatRooms[user.room] = [];
    chatRooms[user.room].push(messageData);
    
    // Broadcast to all users in the room
    io.to(user.room).emit('new_message_from_server', messageData);
    
    console.log(`Message from ${user.username} in ${user.room}: ${data.message}`);
  });
  
  // Handle room changes (Ninja Bonus)
  socket.on('change_room', (data) => {
    const user = connectedUsers[socket.id];
    if (!user) return;
    
    const { newRoom } = data;
    const oldRoom = user.room;
    
    // Leave old room
    socket.leave(oldRoom);
    
    // Join new room
    socket.join(newRoom);
    user.room = newRoom;
    
    // Send past messages from the new room
    socket.emit('past_messages', chatRooms[newRoom] || []);
    
    // Notify old room that user left
    const leaveMessage = {
      id: Date.now(),
      username: 'System',
      message: `${user.username} has left the chat`,
      timestamp: new Date().toISOString(),
      room: oldRoom,
      type: 'system'
    };
    
    if (!chatRooms[oldRoom]) chatRooms[oldRoom] = [];
    chatRooms[oldRoom].push(leaveMessage);
    io.to(oldRoom).emit('new_message_from_server', leaveMessage);
    
    // Notify new room that user joined
    const joinMessage = {
      id: Date.now(),
      username: 'System',
      message: `${user.username} has joined the chat`,
      timestamp: new Date().toISOString(),
      room: newRoom,
      type: 'system'
    };
    
    if (!chatRooms[newRoom]) chatRooms[newRoom] = [];
    chatRooms[newRoom].push(joinMessage);
    io.to(newRoom).emit('new_message_from_server', joinMessage);
    
    console.log(`${user.username} moved from ${oldRoom} to ${newRoom}`);
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    const user = connectedUsers[socket.id];
    if (user) {
      const leaveMessage = {
        id: Date.now(),
        username: 'System',
        message: `${user.username} has left the chat`,
        timestamp: new Date().toISOString(),
        room: user.room,
        type: 'system'
      };
      
      if (!chatRooms[user.room]) chatRooms[user.room] = [];
      chatRooms[user.room].push(leaveMessage);
      io.to(user.room).emit('new_message_from_server', leaveMessage);
      
      console.log(`${user.username} disconnected from ${user.room}`);
      delete connectedUsers[socket.id];
    } else {
      console.log('User disconnected');
    }
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Chat Server running on port ${PORT}`);
});

