const Joke = require('../models/joke.model')

// Get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
};

// Get a single joke by ID
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => {
            res.json({ joke: oneSingleJoke });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
};

// Create a new joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => {
            res.json({newlyCreatedJoke });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
};

// Update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
};

// Delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
};