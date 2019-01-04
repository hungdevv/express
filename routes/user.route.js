const express = require('express');
const router = express.Router();


const controller = require('../controllers/user.controller')


module.exports = router;

router.get('/', controller.index)
// console.log(db.get('users').value());
router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:abcdfsd', controller.idd)

router.post('/create', controller.postcreate)
