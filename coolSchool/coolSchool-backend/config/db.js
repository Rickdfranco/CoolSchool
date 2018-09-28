const mongoose      = require('mongoose');
mongoose.Promise    = global.Promise;

const DB_URL = 'mongodb://localhost:27017/users';
mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.once('open', ()=> console.log(`Connected to Mongo at ${DB_URL}`));

module.exports = mongoose;