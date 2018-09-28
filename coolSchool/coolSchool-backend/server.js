const express       = require('express');
const usersRoutes   = require('./routes/users');
const mongomorgan   = require('mongo-morgan');

const app = express();
const port = 5000;

// require .env and db.js
require('dotenv').load();
require('./config/db');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongomorgan(process.env.DB_URL, 'dev'));

// routes
app.use('/api/users', usersRoutes);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;