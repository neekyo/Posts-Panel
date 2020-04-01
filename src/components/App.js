import React from 'react';
import NavBar from './NavBar';
import PostList from './PostList';

const App = () => {
	return (
		<div className="ui container">
			<NavBar />
			<PostList />
		</div>
	);
};

export default App;
