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


module.exports = router;