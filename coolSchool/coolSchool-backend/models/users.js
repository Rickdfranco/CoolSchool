const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/
var userSchema = new Schema({
    isDriver: {
        type: Boolean,
        required: true
    },
    balance: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: true 
    },
    first: {
        type: String,
        required: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    imgUrl: {
       data: Buffer,
       contentType: String
    }
})



var User = mongoose.model('User', userSchema);
module.exports = User;