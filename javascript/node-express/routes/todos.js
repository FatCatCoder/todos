const router = require("express").Router();
const { database } = require('../db');

// Routes

// gets all todos
router.get('/', (req, res) => {
    try {
        return res.json(database);

    } catch (error) {
        return res.send('Oops! Server Error.')
    }
});

// add a todo
router.post('/', (req, res) => {
    try {
        const data = req.body;
        database.push(data);

        return res.status(201).json(data);

    } catch (error) {
        return res.send('Oops! Server Error.')
    }
});

// get a todo
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;

        const found = database.find(x => x.id == id);

        return found? res.json(found) : res.send(false);

    } catch (error) {
        return res.send('Oops! Server Error.')
    }
});

// delete a todo
router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;

        const found = database.findIndex(x => x.id == id);
        if(found) database.splice(found, 1);

        return found? res.send(true) : res.send(false);

    } catch (error) {
        return res.send('Oops! Server Error.')
    }
});

// update a todo
router.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        console.log('BODY', req.body);

        const found = database.findIndex(x => x.id == id);
        if(found != -1) database[found] = req.body;

        console.log('DB ', database[found]);

        return found? res.status(200).json(req.body) : res.status(404);

    } catch (error) {
        return res.send('Oops! Server Error.')
    }
});


module.exports = router;