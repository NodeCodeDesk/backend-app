import { fetchAllUsers } from '../services/userService';

export const getUser = async (req, res) => {
	try {
		const users = await fetchAllUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
