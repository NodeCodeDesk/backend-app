const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: `1h`
	});
};

const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const userExist = await User.findOne({ email });
		if( userExist ) return res.status(400).json({ message: 'User already exist'});

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		const user = await User.create({ name, email, password: hashPassword });

		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id)
		});
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if(!user) return res.status(400).json({ message: 'Invalid credential '});

		const isMatch = await bcrypt.compare(password, user.password);
		if(!isMatch) return res.status(400).json({ message: 'Invalid credential '});

		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.name,
			token: generateToken(user._id)
		});
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

module.exports = { registerUser, loginUser };