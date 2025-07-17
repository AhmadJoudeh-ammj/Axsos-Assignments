# MERN Socket.io Project

This project demonstrates a complete MERN stack application with Socket.io for real-time communication between client and server.

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

- Express.js server with Socket.io integration
- React client with Socket.io client
- Real-time connection status display
- Welcome message from server to client
- Console logging for connection events
- CORS enabled for cross-origin requests
- Multi-user support via IP address sharing

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

### 3. Test the Connection

1. Open your browser and navigate to `http://localhost:3000`
2. You should see:
   - Connection Status: Connected (in green)
   - Welcome message from the server
3. Open browser developer tools (F12) and check the Console tab
4. You should see:
   - "Connected to server"
   - "Welcome message received: Welcome to the MERN Socket.io server! Connection established successfully."

### 4. Server Console Output

In your server terminal, you should see:
```
Server running on port 3001
Nice to meet you. (shake hand)
```

## Multi-User Testing

To test with cohort members:

### Finding Your IP Address

**Windows:**
```cmd
ipconfig
```
Look for your WiFi adapter IP address (if using WiFi) or Ethernet adapter IP (if using wired connection).

**Mac:**
Open System Settings → Network Preferences to find your IP address.

**Linux/Ubuntu:**
```bash
hostname -I
```

### Sharing Your Application

1. Make sure both server and client are running
2. Share your IP address with cohort members
3. They can access your application at: `http://YOUR_IP_ADDRESS:3000`
4. Each new connection will show "Nice to meet you. (shake hand)" in your server terminal

## Technical Details

### Server (server.js)
- Uses Express.js for HTTP server
- Socket.io for WebSocket connections
- CORS enabled for cross-origin requests
- Listens on `0.0.0.0` for external access
- Emits welcome message on connection
- Logs connection events

### Client (Chat.jsx)
- React component with Socket.io client
- Connects to server on port 3001
- Displays connection status
- Shows welcome message from server
- Logs events to browser console
- Handles connection/disconnection events

## Troubleshooting

1. **Connection Failed**: Ensure server is running on port 3001
2. **CORS Issues**: Server is configured with CORS enabled
3. **Port Conflicts**: Change ports in server.js and Chat.jsx if needed
4. **Firewall Issues**: Ensure ports 3000 and 3001 are not blocked

## Next Steps

This basic setup can be extended with:
- Chat messaging functionality
- User authentication
- Room-based communication
- File sharing
- Video/audio calls

## Dependencies

**Server:**
- express: Web framework
- socket.io: Real-time communication
- cors: Cross-origin resource sharing

**Client:**
- react: Frontend framework
- socket.io-client: Socket.io client library

