// Create web server
const express = require('express');
const app = express();
const port = 3000;

// add middleware to parse body
app.use(express.json());

// data
const comments = [
  { id: 1, comment: 'hello' },
  { id: 2, comment: 'world' }
];

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});