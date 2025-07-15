const jcon =require('../controllers/joke.controller.js');
module.exports = app=>{

    app.get('/jokes', jcon.findAllJokes);
    app.get('/jokes/:id', jcon.findOneSingleJoke);
    app.post('/jokes/new', jcon.createNewJoke);
    app.put('/jokes/:id', jcon.updateExistingJoke);
    app.delete('/jokes/:id', jcon.deleteAnExistingJoke);
}

