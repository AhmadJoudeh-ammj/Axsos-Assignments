const mongoose = require('mongoose');
const username = process.env.username;
const pw = process.env.password;
const dbName = process.env.dbName;

const uri = `mongodb+srv://${username}:${pw}@cluster0.qvwqtrf.mongodb.net/products?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log(`Connected to database: ${dbName}`))
    .catch(err => {
        console.error("Database connection error:", err.message);
        process.exit(1);
    });

    module.exports 