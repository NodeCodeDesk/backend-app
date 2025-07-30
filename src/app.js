const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth.routes');
const privateRoute = require('./routes/private.routes');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/private', privateRoute);

// Health check
app.get('/health', ( req, res ) => {
	res.status(200).json({ status: 'Ok', message: 'Server is healthy' });
});

module.exports = app;