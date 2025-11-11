// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi github preview!');
});

app.listen(3000, () => console.log('Running on :3000'));
module.exports = app;