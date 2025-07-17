const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 8000;

// --- Middleware ---
app.use(cors()); // Allows requests from the React frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Database Connection ---
require('./config/mongoose.config');

// --- API Routes ---
require('./routes/author.routes')(app);

// --- Start Server ---
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
