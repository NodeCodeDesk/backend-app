import { getUsers } from '../../../src/controllers/userController';
import { jest } from '@jest/globals';

describe('User Controller', ()=> {
	it('should return success response', () => {
		const req = {};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		};

		getUsers(req,res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ message: 'Users fetched successfully!'})
	})
})