const express   = require('express');
const router    = express.Router();

// import rides controller

router.get('/', function(req, res) {
    res.send({ message: 'index route'});
});


// Get      all rides
// Get      a ride by id
// Create   a ride
// Update   a ride by id
// Delete   a ride by id

// Get      all rides associated with a user id


module.exports = router