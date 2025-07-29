const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Health check
app.get('/health', ( req, res ) => {
	res.status(200).json({ status: 'Ok', message: 'Server is healthy' });
});

module.exports = app;