const express = require('express');
const http = require('http');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello');
});

const server = http.createServer(app);

module.exports = server;