const mongoose = require('mongoose');
require('dotenv').config(); // Make sure dotenv is required to load the .env file

const mongoUri = process.env.MONGO_URI; // Get the full URI from .env

mongoose.connect(mongoUri)
    .then(() => console.log("Successfully connected to MongoDB Atlas!"))
    .catch((err) => {
        console.log("Error connecting to MongoDB Atlas.");
        console.error(err);
    });