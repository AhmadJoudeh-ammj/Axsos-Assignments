import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [currentRoom, setCurrentRoom] = useState('general');
  const messagesEndRef = useRef(null);



  // Auto-scroll to bottom (Bonus feature)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Connect to the server
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    // Listen for connection
    newSocket.on('connect', () => {
      setConnectionStatus('Connected');
      console.log('Connected to server');
    });

    // Listen for welcome event
    newSocket.on('welcome', (data) => {
      console.log('Welcome message received:', data);
    });

    // Listen for new messages from server - USING FUNCTIONAL UPDATE
    newSocket.on('new_message_from_server', (messageData) => {
      console.log('New message received:', messageData);
      // CRITICAL: Using functional update as specified in the requirements
      setMessages(prevMessages => {
        return [...prevMessages, messageData];
      });
    });

    // Listen for past messages when joining a room - USING FUNCTIONAL UPDATE
    newSocket.on('past_messages', (pastMessages) => {
      console.log('Past messages received:', pastMessages);
      // CRITICAL: Using functional update as specified in the requirements
      setMessages(prevMessages => {
        return [...pastMessages];
      });
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

  const handleJoinChat = () => {
    if (username.trim() && socket) {
      socket.emit('user_joined', { username: username.trim(), room: currentRoom });
      setIsJoined(true);
      // Save username to localStorage as shown in wireframe
      localStorage.setItem('chatUsername', username.trim());
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() && socket && isJoined) {
      socket.emit('new_message_from_client', { message: currentMessage.trim() });
      setCurrentMessage('');
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  // Load username from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('chatUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  if (!isJoined) {
    return (
      <div style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '30px',
          border: '2px solid #333',
          padding: '20px',
          backgroundColor: '#f5f5f5'
        }}>
          MERN Chat
        </h1>

        <div style={{
          border: '2px solid #333',
          padding: '40px',
          backgroundColor: '#f9f9f9',
          marginBottom: '20px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Get started right now!</h2>
          <p style={{ marginBottom: '30px' }}>I want to start chatting with the name...</p>

          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="My name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleJoinChat()}
              style={{
                padding: '10px',
                fontSize: '16px',
                border: '2px solid #333',
                marginRight: '10px',
                width: '200px'
              }}
            />
            <button
              onClick={handleJoinChat}
              disabled={!username.trim()}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: '2px solid #333',
                cursor: username.trim() ? 'pointer' : 'not-allowed',
                opacity: username.trim() ? 1 : 0.6
              }}
            >
              Start Chatting
            </button>
          </div>

      
        </div>

      
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '20px',
        border: '2px solid #333',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}>
        MERN Chat
      </h1>


      {/* Messages Display */}
      <div style={{
        flex: 1,
        border: '2px solid #333',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        overflowY: 'auto',
        marginBottom: '20px',
        minHeight: '400px'
      }}>
        {messages.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                marginBottom: '15px',
                padding: '10px',
                backgroundColor: msg.type === 'system' ? '#fff3cd' :
                  msg.username === username ? '#cce5ff' : '#e9ecef',
                border: '1px solid #ccc',
                borderRadius: '8px',
                borderLeft: msg.type === 'system' ? '4px solid #ffc107' :
                  msg.username === username ? '4px solid #007bff' : '4px solid #6c757d'
              }}
            >
              <div style={{
                fontWeight: 'bold',
                marginBottom: '5px',
                color: msg.type === 'system' ? '#856404' : '#333'
              }}>
                {msg.username === username ? 'You said..' : `${msg.username} said`}
                <span style={{
                  float: 'right',
                  fontSize: '12px',
                  fontWeight: 'normal',
                  color: '#666'
                }}>
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
              <div style={{ color: '#333' }}>{msg.message}</div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message here..."
          style={{
            flex: 1,
            padding: '15px',
            fontSize: '16px',
            border: '2px solid #333',
            borderRadius: '5px'
          }}
        />
        <button
          type="submit"
          disabled={!currentMessage.trim()}
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: '2px solid #333',
            borderRadius: '5px',
            cursor: currentMessage.trim() ? 'pointer' : 'not-allowed',
            opacity: currentMessage.trim() ? 1 : 0.6
          }}
        >
          Send
        </button>
      </form>

      {/* Status and Instructions */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>Connection Status: </strong>
          <span style={{
            color: connectionStatus === 'Connected' ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            {connectionStatus}
          </span>
        </div>
    
      </div>
    </div>
  );
};

export default Chat;

