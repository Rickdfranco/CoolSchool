const express   = require('express');
const router    = express.Router();

// import users controller
const {
    index,
    rank
} = require('../controllers/schools-controller')


router.get('/', index);
router.get('/rankHistory', rank);



module.exports = router;