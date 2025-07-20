# Team Manager Application

A full-stack MERN application for managing team players and their game status. Built with React (Vite), Express.js, MongoDB, and Mongoose with best practices for project structure, validation, and CORS configuration.

## Project Structure

```
team-manager-app/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── PlayerList.jsx
│   │   │   ├── AddPlayer.jsx
│   │   │   └── PlayerStatus.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── server.js
│   └── package.json
└── README.md
```

## Features

### Core Features
- ✅ **Player Management**: Add, view, and delete players
- ✅ **Position Tracking**: Track preferred positions for each player
- ✅ **Game Status Management**: Manage player status across 3 games
- ✅ **Real-time Updates**: Instant status updates with visual feedback
- ✅ **Responsive Design**: Works on desktop and mobile devices

### Technical Features
- ✅ **Frontend & Backend Validation**: Comprehensive validation on both sides
- ✅ **CORS Configuration**: Proper cross-origin resource sharing setup
- ✅ **MongoDB Integration**: Full database persistence with Mongoose
- ✅ **RESTful API**: Clean API design with proper HTTP methods
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Modern React**: Uses React hooks and functional components

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation & Setup

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd team-manager-app
```

### 2. Install Server Dependencies
```bash
cd server
npm install
```

### 3. Install Client Dependencies
```bash
cd ../client
npm install
```

### 4. MongoDB Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The application will connect to `mongodb://localhost:27017/team_manager`

#### Option B: MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the connection string in `server/server.js`:
```javascript
mongoose.connect('your-mongodb-atlas-connection-string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
```

## Running the Application

### Development Mode

#### Start the Backend Server (Terminal 1)
```bash
cd server
npm run dev
```
The server will run on `http://localhost:8000`

#### Start the Frontend Client (Terminal 2)
```bash
cd client
npm run dev
```
The React app will run on `http://localhost:5173`

### Production Mode

#### Build the Frontend
```bash
cd client
npm run build
```

#### Start the Backend
```bash
cd server
npm start
```

## API Endpoints

### Players
- `GET /api/players` - Get all players
- `POST /api/players` - Create a new player
- `DELETE /api/players/:id` - Delete a player

### Player Status
- `GET /api/status` - Get all player statuses
- `GET /api/status/game/:gameNumber` - Get player statuses for a specific game
- `PUT /api/status/:playerId/game/:gameNumber` - Update player status for a game

## Validation Rules

### Frontend Validation
- **Player Name**: Required, minimum 2 characters
- **Preferred Position**: Required field
- **Real-time validation**: Errors shown as user types

### Backend Validation
- **Player Name**: Required, minimum 2 characters, trimmed
- **Preferred Position**: Required, trimmed
- **Game Status**: Must be 'Playing', 'Not Playing', or 'Undecided'
- **Game Number**: Must be between 1 and 3

## Application Flow

### 1. Player Management
1. **View Players**: Navigate to "Manage Players" to see all players
2. **Add Player**: Click "Add Player" button
   - Enter player name (minimum 2 characters)
   - Enter preferred position
   - Form validates in real-time
   - Click "ADD" to save or "Cancel" to go back
3. **Delete Player**: Click "DELETE" button next to any player
   - Click again to confirm deletion
   - Confirmation auto-cancels after 3 seconds

### 2. Player Status Management
1. **View Status**: Navigate to "Manage Player Status"
2. **Select Game**: Click on Game 1, Game 2, or Game 3 tabs
3. **Update Status**: Click status buttons for each player:
   - **Playing** (Green): Player is participating
   - **Not Playing** (Red): Player is not participating
   - **Undecided** (Yellow): Default status, not decided yet

## Database Schema

### Player Model
```javascript
{
  name: String (required, min: 2 chars),
  preferredPosition: String (required),
  timestamps: true
}
```

### PlayerStatus Model
```javascript
{
  playerId: ObjectId (ref: Player),
  gameNumber: Number (1-3),
  status: String (enum: ['Playing', 'Not Playing', 'Undecided']),
  timestamps: true
}
```

## Environment Configuration

### Server Environment Variables
Create a `.env` file in the server directory:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/team_manager
NODE_ENV=development
```

### Client Environment Variables
Create a `.env` file in the client directory:
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update the API base URL to your deployed backend URL

### Backend Deployment (Heroku/Railway)
1. Ensure MongoDB Atlas is configured
2. Set environment variables on your hosting platform
3. Deploy the server folder
4. Update CORS settings if needed for production domains

### Full-Stack Deployment
1. Build the frontend and place in server's public folder
2. Serve static files from Express
3. Deploy as a single application

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure server has CORS enabled
   - Check API base URL in client

2. **MongoDB Connection Issues**
   - Verify MongoDB is running (local)
   - Check connection string (Atlas)
   - Ensure network access is configured (Atlas)

3. **Port Conflicts**
   - Server default: 8000
   - Client default: 5173
   - Change ports in package.json if needed

4. **Validation Errors**
   - Check minimum character requirements
   - Ensure all required fields are filled

## Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Axios**: HTTP client for API calls
- **CSS3**: Custom styling with responsive design

### Backend
- **Express.js**: Web framework for Node.js
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development auto-restart

### Database
- **MongoDB**: NoSQL document database
- **MongoDB Atlas**: Cloud database option

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the API documentation
3. Check browser console for errors
4. Verify MongoDB connection

