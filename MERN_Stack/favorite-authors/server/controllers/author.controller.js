const Author = require('../models/author.model');

// Helper function to format Mongoose validation errors
const formatErrors = (err) => {
    const errorMessages = [];
    if (err.name === 'ValidationError') {
        for (let field in err.errors) {
            errorMessages.push(err.errors[field].message);
        }
    }
    return errorMessages;
};

module.exports = {
    // Get all authors
    getAllAuthors: (req, res) => {
        Author.find().sort({ name: 1 }) // Sort alphabetically by name
            .then(authors => res.json(authors))
            .catch(err => res.status(500).json({ messages: ["Error fetching authors."] }));
    },

    // Get one author by ID
    getAuthorById: (req, res) => {
        Author.findById(req.params.id)
            .then(author => author ? res.json(author) : res.status(404).json({ messages: ["Author not found."] }))
            .catch(err => res.status(500).json({ messages: ["Error fetching author."] }));
    },

    // Create a new author
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.status(201).json(newAuthor))
            .catch(err => res.status(400).json({ messages: formatErrors(err) }));
    },

    updateAuthor: (req, res) => {
    // Did the request reach the backend controller?
    console.log('--- BACKEND HIT ---');
    console.log('Updating document with ID:', req.params.id);
    console.log('Request body:', req.body);
    
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            console.log('Backend success. Updated author:', updatedAuthor);
            res.json(updatedAuthor);
        })
        .catch(err => {
            console.error('Backend FAILED.', err);
            res.status(400).json({ messages: formatErrors(err) });
        });
},


    // Delete an author by ID
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.status(500).json({ messages: ["Error deleting author."] }));
    }
};