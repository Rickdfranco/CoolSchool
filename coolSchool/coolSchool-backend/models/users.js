const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/
var userSchema = new Schema({
    rank: {
      type: Number,
      required: true
    },
    schoolname: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    averageStandardScore: {
      type: Number
    }
  }
)


var schoolData = mongoose.model('schoolData', userSchema);
module.exports = schoolData;