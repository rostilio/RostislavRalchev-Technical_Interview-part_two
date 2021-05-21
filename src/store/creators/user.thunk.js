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

export const fetchUserPostsData = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
			const data = await response.json();

            return data;
        }

        try {
			const userPostsData = await fetchData();
			dispatch(userActions.setUserPosts({data: userPostsData, userId: id}));
		} catch (error) {
			throw new Error('Error fetching user posts data');
		}
    }
}