const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined in .env');
    process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
});

// Player Schema
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Player name is required'],
        minlength: [2, 'Player name must be at least 2 characters long'],
        trim: true
    },
    preferredPosition: {
        type: String,
        required: [true, 'Preferred position is required'],
        trim: true
    }
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

// Player Status Schema
const playerStatusSchema = new mongoose.Schema({
    playerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    },
    gameNumber: {
        type: Number,
        required: true,
        min: 1
    },
    status: {
        type: String,
        enum: ['Playing', 'Not Playing', 'Undecided'],
        default: 'Undecided'
    }
}, { timestamps: true });

const PlayerStatus = mongoose.model('PlayerStatus', playerStatusSchema);

// Routes

// Get all players
app.get('/api/players', async (req, res) => {
    try {
        const players = await Player.find().sort({ createdAt: -1 });
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new player
app.post('/api/players', async (req, res) => {
    try {
        const { name, preferredPosition } = req.body;

        if (!name || name.trim().length < 2) {
            return res.status(400).json({ message: 'Player name must be at least 2 characters long' });
        }

        if (!preferredPosition || preferredPosition.trim().length === 0) {
            return res.status(400).json({ message: 'Preferred position is required' });
        }

        const player = new Player({
            name: name.trim(),
            preferredPosition: preferredPosition.trim()
        });

        const savedPlayer = await player.save();

        // Create default status entries for 3 games
        const statusPromises = [];
        for (let gameNumber = 1; gameNumber <= 3; gameNumber++) {
            statusPromises.push(
                new PlayerStatus({
                    playerId: savedPlayer._id,
                    gameNumber,
                    status: 'Undecided'
                }).save()
            );
        }

        await Promise.all(statusPromises);

        res.status(201).json(savedPlayer);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        res.status(500).json({ message: error.message });
    }
});

// Delete a player
app.delete('/api/players/:id', async (req, res) => {
    try {
        const playerId = req.params.id;

        await PlayerStatus.deleteMany({ playerId });
        const deletedPlayer = await Player.findByIdAndDelete(playerId);

        if (!deletedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get player status for a specific game
app.get('/api/status/game/:gameNumber', async (req, res) => {
    try {
        const gameNumber = parseInt(req.params.gameNumber);

        if (gameNumber < 1 || gameNumber > 3) {
            return res.status(400).json({ message: 'Game number must be between 1 and 3' });
        }

        const playerStatuses = await PlayerStatus.find({ gameNumber })
            .populate('playerId', 'name preferredPosition')
            .sort({ createdAt: -1 });

        res.json(playerStatuses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update player status for a specific game
app.put('/api/status/:playerId/game/:gameNumber', async (req, res) => {
    try {
        const { playerId, gameNumber } = req.params;
        const { status } = req.body;

        if (!['Playing', 'Not Playing', 'Undecided'].includes(status)) {
            return res.status(400).json({ message: 'Status must be Playing, Not Playing, or Undecided' });
        }

        const updatedStatus = await PlayerStatus.findOneAndUpdate(
            { playerId, gameNumber: parseInt(gameNumber) },
            { status },
            { new: true, upsert: true }
        ).populate('playerId', 'name preferredPosition');

        res.json(updatedStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all player statuses
app.get('/api/status', async (req, res) => {
    try {
        const playerStatuses = await PlayerStatus.find()
            .populate('playerId', 'name preferredPosition')
            .sort({ gameNumber: 1, createdAt: -1 });

        res.json(playerStatuses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;