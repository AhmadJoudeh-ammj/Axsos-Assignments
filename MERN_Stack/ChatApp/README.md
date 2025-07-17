# MERN Socket.io Chat Application

This project is a fully functional real-time chat application built with the MERN stack and Socket.io. It demonstrates advanced React state management using functional updates in event listeners and includes multiple bonus features.

## Project Structure

```
mern-socket-project/
├── server/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── client/
    ├── src/
    │   ├── Chat.jsx
    │   ├── App.js
    │   └── ...
    ├── package.json
    └── node_modules/
```

## Features

### Core Features
- ✅ **Real-time messaging** with Socket.io
- ✅ **Functional state updates** in event listeners (critical requirement)
- ✅ **User authentication** with username entry
- ✅ **Connection status** display
- ✅ **Message timestamps** and user identification

### Bonus Features
- ✅ **Auto-scroll to bottom** - Messages automatically scroll to the latest
- ✅ **Multiple chat rooms** - Users can switch between #general, #random, and #coding
- ✅ **Past message history** - New users see previous messages when joining a room
- ✅ **Join/leave notifications** - System messages when users enter/exit rooms
- ✅ **Username persistence** - Names saved in localStorage

### Technical Highlights
- **Functional Updates**: Uses `setMessages(prevMessages => [...prevMessages, newMessage])` syntax in Socket.io event listeners
- **Room-based messaging**: Messages are isolated to specific chat rooms
- **Message persistence**: Chat history is maintained per room on the server
- **Responsive design**: Works on both desktop and mobile devices

## Critical Implementation Detail

The application correctly implements **functional state updates** in Socket.io event listeners, which is essential for proper state management in React:

```javascript
// CORRECT - Using functional update
socket.on('new_message_from_server', (messageData) => {
  setMessages(prevMessages => {
    return [...prevMessages, messageData];
  });
});

// INCORRECT - Direct state update (would cause bugs)
socket.on('new_message_from_server', (messageData) => {
  setMessages([...messages, messageData]); // This won't work properly
});
```

## Setup Instructions

### 1. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### 2. Start the Application

**Start the server (Terminal 1):**
```bash
cd server
npm start
```
The server will run on port 3001.

**Start the client (Terminal 2):**
```bash
cd client
npm start
```
The React app will run on port 3000.

### 3. Using the Chat Application

1. **Join the Chat:**
   - Enter your username in the "My name" field
   - Select a chat room (general, random, or coding)
   - Click "Start Chatting"

2. **Send Messages:**
   - Type your message in the input field at the bottom
   - Press Enter or click "Send"
   - Messages appear in real-time for all users in the same room

3. **Switch Rooms:**
   - Click on any room button (#general, #random, #coding) to switch
   - You'll see past messages from that room
   - Other users will be notified when you join/leave

4. **Multi-User Testing:**
   - Share your IP address with cohort members
   - They can access: `http://YOUR_IP_ADDRESS:3000`
   - Each connection shows in the server console

## Multi-User Testing

### Finding Your IP Address

**Windows:**
```cmd
ipconfig
```

**Mac:**
Open System Settings → Network Preferences

**Linux/Ubuntu:**
```bash
hostname -I
```

### Public Access
For easy sharing, the application is also available at:
https://3000-i0ilc5ke4n3l5qjdouenq-78cd84ff.manusvm.computer

## Technical Architecture

### Server (server.js)
- **Express.js** for HTTP server
- **Socket.io** for WebSocket connections
- **Room management** with join/leave functionality
- **Message persistence** per room
- **User tracking** with connection state
- **CORS enabled** for cross-origin requests

### Client (Chat.jsx)
- **React hooks** for state management
- **Socket.io client** for real-time communication
- **Functional updates** in event listeners (critical requirement)
- **Auto-scroll** functionality
- **Room switching** UI
- **Message formatting** with timestamps
- **LocalStorage** for username persistence

## Event Flow

1. **User Joins:**
   - Client emits `user_joined` with username and room
   - Server adds user to room and sends past messages
   - Server broadcasts join notification to room

2. **Message Sending:**
   - Client emits `new_message_from_client` with message
   - Server broadcasts `new_message_from_server` to all room members
   - Client receives and displays message using functional update

3. **Room Switching:**
   - Client emits `change_room` with new room name
   - Server moves user between rooms
   - Server sends past messages from new room
   - Server notifies both rooms of user movement

## Troubleshooting

1. **Messages not appearing**: Check that functional updates are used in event listeners
2. **Connection issues**: Ensure server is running on port 3001
3. **Room switching problems**: Verify server room management logic
4. **CORS errors**: Server is configured with CORS enabled
5. **State bugs**: Confirm functional updates syntax: `setState(prev => newValue)`

## Dependencies

**Server:**
- express: Web framework
- socket.io: Real-time communication
- cors: Cross-origin resource sharing

**Client:**
- react: Frontend framework
- socket.io-client: Socket.io client library

## Next Steps

This chat application can be extended with:
- User authentication and profiles
- Private messaging
- File sharing capabilities
- Message reactions and emojis
- Voice/video calling
- Message encryption
- Database persistence
- User roles and moderation

