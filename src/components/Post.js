import React from 'react';
import './Post.scss';

const Post = (props) => {
	return (
		<section className='post-container'>
			<h5>{props.post.title}</h5>
			<div className='content'>{props.post.body}</div>
		</section>
	);
};

export default Post;
