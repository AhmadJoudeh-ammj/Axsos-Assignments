const mongoose = require('mongoose');

const express = require("express");

const app = express();

require('dotenv').config()

require("../Jokes-api/src/config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("../Jokes-api/src/routes/joke.routes.js");

AllMyJokesRoutes(app);

app.listen(8000, () => console.log(`Listening on port: 8000`));
