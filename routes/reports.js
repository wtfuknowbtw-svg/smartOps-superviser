const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Reports route'));

module.exports = router;