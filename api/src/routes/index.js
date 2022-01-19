const { Router } = require('express');
const activity = require('./activity');
const countries = require('./countries');

const router = Router();

router.use("/countries", countries);
router.use("/activity", activity);

module.exports = router;
