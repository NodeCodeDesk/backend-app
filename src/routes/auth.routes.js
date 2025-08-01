/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');
const validate = require('../middlewares/validate.middleware');
const { registerSchema, loginSchema } = require('../utils/validators/auth.validator');

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 * 	 post:
 * 		summary: Register a new user
 * 		tags: [Auth]
 * 		requestBody: 
 * 		  required: true
 * 		  content: 
 * 			application/json
 * 			  schema:
 * 				type: object
 * 				required:
 * 				  - name
 * 				  - email
 * 				  - password
 * 				properties: 
 * 				  name: 
 * 					type: String
 * 					example: Mahesh
 * 				  email: 
 * 					type: String
 * 					example: mahesh@example.com
 * 				  password: 
 * 					type: String
 * 					example: Password123
 * 		responses: 
 * 		  201: 
 * 			description: User created
 * 		  400: 
 * 			description: User already exist or validation error
 * 
 */
router.post('/register', validate(registerSchema), registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: mahesh@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successful login with token
 *       400:
 *         description: Invalid credentials or validation error
 */
router.post('/login',validate(loginSchema), loginUser);

module.exports = router;