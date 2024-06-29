const router = require('express').Router();

const {getAllUsers,getUserById}= require('../controller/user')


router.get('/', getAllUsers);
router.get('/:id',getUserById);
module.exports = router;