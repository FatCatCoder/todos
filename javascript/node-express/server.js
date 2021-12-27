const express = require('express');
const app = express();

const cors = require("cors");
const port = 5000;


// Middleware
app.use(express.json()) //allows access req.body
app.use(cors())

// Routes
app.use('/api/todos', require('./routes/todos'))

// Server listening
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});