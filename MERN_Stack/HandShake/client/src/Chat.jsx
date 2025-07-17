import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    // Connect to the server
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);


    // Listen for connection
    newSocket.on('connect', () => {
      setConnectionStatus('Connected');
      console.log('Connected to server');});

    // Listen for welcome event
    newSocket.on('welcome', (data) => {
      console.log('Welcome message received:', data);
      setWelcomeMessage(data);
    });

    // Listen for disconnection
    newSocket.on('disconnect', () => {
      setConnectionStatus('Disconnected');
      console.log('Disconnected from server');
    });

    // Cleanup on component unmount
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Socket Chat</h2>
      <div style={{ marginBottom: '20px' }}>
        <strong>Connection Status: </strong>
        <span style={{ 
          color: connectionStatus === 'Connected' ? 'green' : 'red',
          fontWeight: 'bold'
        }}>
          {connectionStatus}
        </span>
      </div>
      
      {welcomeMessage && (
        <div style={{ 
          backgroundColor: '#f0f8ff', 
          padding: '15px', 
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '20px'
        }}>
          <strong>Welcome Message:</strong>
          <p>{welcomeMessage}</p>
        </div>
      )}
      
    
    </div>
  );
};

export default Chat;

