const express = require('express');
const users = require('./users');
const app = express();

// route
app.get('/users', (req, res) => {
     res.json(user);
})