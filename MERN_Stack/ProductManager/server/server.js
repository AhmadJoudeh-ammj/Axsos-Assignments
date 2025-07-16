const mongoose = require('mongoose');
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());



require('./config/mongoose.config'); // ✅ Connect to MongoDB

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/products', require('./routes/product.routes')); // ✅ Route prefix

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));