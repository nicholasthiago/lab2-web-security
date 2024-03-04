import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Fact from './Fact';
import Logout from './Logout';

function App() {
	const [token, setToken] = useState('');
	const [logged, setLogged] = useState(false)
	const [message, setMessage] = useState('');

	const handleToken = (token) => {
		const isValid = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(token)

		console.log(token)
		console.log(isValid)

		if (isValid) {
			setToken(token)
			setLogged(true)

		} else {
			setToken('')
			setLogged(false)
		}
	}

	const handleLogout = (message) => {
		setLogged(false)
		setMessage(message)
	}

	if (!logged) {

		return (
			<div className="app">
				<h2><strong> {message} </strong></h2>
				{/* Display login form if token is not set. */}
				<Login getToken={handleToken} />
			</div>
		);

	} else {
		return (
			<div className="app">
				<Logout token={token} onSignout={handleLogout} />

				{/* Display login form if token is not set. */}
				<Fact token={token} />

				{/* Display fact and logout if token is set. */}
				{/*<Fact />*/}
			</div>
		);
	}
}

export default App;
