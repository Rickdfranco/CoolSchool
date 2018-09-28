const express   = require('express');
const router    = express.Router();

// import users controller
const {
    index,
    getId
} = require('../controllers/schools-controller')


router.get('/', index);
router.get('/rank', getId);



module.exports = router;