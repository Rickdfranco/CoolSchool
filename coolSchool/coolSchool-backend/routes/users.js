const express   = require('express');
const router    = express.Router();

// import users controller
const {
    index,
    getId,
    signup,
    updateUser,
    deleteUser
} = require('./../controllers/users-controller')


router.get('/', index);
router.get('/:id', getId);
router.post('/signup', signup)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
// Get      all users
// Get      a user by id
// Create   a user by id
// Update   a user by id
// Delete   a user by id

module.exports = router;