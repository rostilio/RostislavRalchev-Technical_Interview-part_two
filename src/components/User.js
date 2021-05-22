import React, { useState } from 'react';
import Card from '../UI/Card';
import Post from './Post';
import './User.scss';
import UserModel from '../model/user';
import axios from 'axios';
import baseURL from '../API/api';

const User = (props) => {
	const [user, setUser] = useState(
		new UserModel(
			props.user?.id,
			props.user?.name,
			props.user?.username,
			props.user?.email,
			props.user?.address.street,
			props.user?.address.suite,
			props.user?.address.city,
			props.user?.phone,
			props.user?.website,
			[]
		)
	);
	const [postVisibility, setPostVisibility] = useState(false);

	const handleUserPosts = async () => {
		const response = await axios.get(baseURL + `posts?userId=${user.id}`);
		setUser({ ...user, posts: response.data });
	};

	return (
		<Card>
			<div className='input-container'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					editable='true'
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					editable='true'
					value={user.username}
					onChange={(e) => setUser({ ...user, username: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					id='email'
					editable='true'
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='addressStreet'>Street</label>
				<input
					type='text'
					id='addressStreet'
					editable='true'
					value={user.addressStreet}
					onChange={(e) => setUser({ ...user, addressStreet: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='addressSuite'>Suite</label>
				<input
					type='text'
					id='addressSuite'
					editable='true'
					value={user.addressSuite}
					onChange={(e) => setUser({ ...user, addressSuite: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='addressCity'>City</label>
				<input
					type='text'
					id='addressCity'
					editable='true'
					value={user.addressCity}
					onChange={(e) => setUser({ ...user, addressCity: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='phone'>Phone</label>
				<input
					type='text'
					id='phone'
					editable='true'
					value={user.phone}
					onChange={(e) => setUser({ ...user, phone: e.target.value })}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='website'>Website</label>
				<input
					type='text'
					id='website'
					editable='true'
					value={user.website}
					onChange={(e) => setUser({ ...user, website: e.target.value })}
				/>
			</div>
			<div className='posts-button'>
				<button onClick={handleUserPosts}>Get user's posts</button>
			</div>
			{user.posts.length !== 0 && (
				<section className='posts-list'>
					<button onClick={() => {setPostVisibility(!postVisibility)}}>User post's list</button>
					<div>{postVisibility && user.posts.map((postEl) => <Post key={postEl.id} post={postEl} />)}</div>
				</section>
			)}
		</Card>
	);
};

export default User;