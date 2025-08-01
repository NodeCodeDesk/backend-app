const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
	let token;
	try {
		if(req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')) {
				token = req.headers.authorization.split(' ')[1];
				const decode = jwt.verify(token, process.env.JWT_SECRET);
				req.user = await User.findById(decode.id).select('-password');
				next();
			} else {
				return res.status(401).json({ message : 'Not authorized, No Token'})
			}
	} catch(error) {
		res.status(401).json({ message : 'Not authorized, No Token'})
	}
}

module.exports = { protect };