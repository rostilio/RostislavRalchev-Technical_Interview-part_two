import { userActions } from '../slices/user.slice';

export const getUsersData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
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