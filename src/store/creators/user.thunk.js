import { userActions } from '../slices/user.slice';
import baseURL from '../../API/api';

export const getUsersData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(baseURL + 'users');
			const data = await response.json();

			return data;
		};

		try {
			const userData = await fetchData();
			dispatch(userActions.getUsers(userData));
		} catch (error) {
			throw new Error('Error fetching user data');
		}
	};
};