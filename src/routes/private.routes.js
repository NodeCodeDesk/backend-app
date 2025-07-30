const express = require('express');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/profile', protect, (req, res) => {
	res.json({ message: 'Private Profile Data', user: req.user });
});

module.exports = router;