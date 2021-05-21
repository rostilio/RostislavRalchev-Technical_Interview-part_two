import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { getUsersData } from '../store/creators/user.thunk';

const UserList = () => {
	const dispatch = useDispatch();
	const currentUsers = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(getUsersData());
	}, [dispatch]);

	return (
		<ul>
			{currentUsers.map(userEl => <User key={userEl.id} user={userEl}/>)}
		</ul>
	);
};

export default UserList;
