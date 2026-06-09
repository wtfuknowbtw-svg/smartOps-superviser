const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Escalations route'));

module.exports = router;