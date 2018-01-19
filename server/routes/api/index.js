const router = require('express').Router;

router.use('/sites', require('./sites'));
router.use('/photos', require('./photos'));

module.exports = router;
