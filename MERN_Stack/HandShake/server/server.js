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

// Basic route
app.get('/', (req, res) => {
  res.send('Socket.io server is running!');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Nice to meet you. (shake hand)');
  
  // Send welcome message to the connected client
  socket.emit('welcome', 'Welcome to MERN Socket server! Connection established successfully.');
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

