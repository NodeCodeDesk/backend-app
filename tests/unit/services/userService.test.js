import * as userService from '../../../src/services/userService';

import User from '../../../src/models/User';
import { it } from 'jest-circus';

jest.mock('../../../src/models/User');

describe('User service', () => {
	it('should return all users', async () => {
		const mockUsers = [{ name: 'Test', email: 'test@example.com' }];
		User.find.mockResolvedValue(mockUSers);
	})
})	