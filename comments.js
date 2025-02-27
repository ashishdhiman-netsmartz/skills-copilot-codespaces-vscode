// Create web server
// npm install express
// npm install body-parser
// npm install mongoose

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Comment = require('./models/comment');

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const comment = new Comment({ text: req.body.text });
  comment.save((err, comment) => {
    if (err) {
      res
        .status
        .send(err);
    }
    res.send(comment);
  }
  );
}
);  // Create a new comment 