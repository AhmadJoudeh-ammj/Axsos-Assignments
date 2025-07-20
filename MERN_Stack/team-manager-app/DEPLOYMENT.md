# Deployment Instructions

## Quick Start (Development)

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone and Setup
```bash
git clone <your-repository>
cd team-manager-app

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Database Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally and start the service
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Recommended for Production)
1. Create account at https://cloud.mongodb.com
2. Create a new cluster
3. Get connection string
4. Update `server/server.js` line 11:
```javascript
mongoose.connect('your-mongodb-atlas-connection-string')
```

### 3. Run the Application
```bash
# Terminal 1: Start backend (from server folder)
npm run dev

# Terminal 2: Start frontend (from client folder)
npm run dev
```

Access the application at: http://localhost:5173

## Production Deployment

### Option 1: Separate Frontend/Backend Deployment

#### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

#### Backend (Heroku/Railway/DigitalOcean)
```bash
cd server
# Set environment variables:
# PORT=8000
# MONGODB_URI=your-atlas-connection-string
npm start
```

### Option 2: Full-Stack Deployment (Single Server)

#### Build Frontend
```bash
cd client
npm run build
cp -r dist/* ../server/public/
```

#### Update Server for Static Files
Add to `server/server.js` after line 10:
```javascript
app.use(express.static('public'));
```

#### Deploy
```bash
cd server
npm start
```

## Environment Variables

### Server (.env)
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/team_manager
NODE_ENV=production
```

### Client (.env)
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## Testing Checklist

- [ ] Add player with validation
- [ ] View player list
- [ ] Delete player with confirmation
- [ ] Switch between games (1, 2, 3)
- [ ] Update player status (Playing/Not Playing/Undecided)
- [ ] Responsive design on mobile
- [ ] API error handling
- [ ] Form validation

## Troubleshooting

### Common Issues
1. **CORS errors**: Ensure server CORS is configured
2. **MongoDB connection**: Check connection string and network access
3. **Port conflicts**: Change ports in package.json if needed
4. **Build errors**: Clear node_modules and reinstall

### Performance Optimization
- Enable MongoDB indexing for large datasets
- Implement pagination for player lists
- Add caching for frequently accessed data
- Optimize bundle size with code splitting

## Security Considerations
- Validate all inputs on both client and server
- Use environment variables for sensitive data
- Implement rate limiting for API endpoints
- Use HTTPS in production
- Sanitize user inputs to prevent XSS attacks

