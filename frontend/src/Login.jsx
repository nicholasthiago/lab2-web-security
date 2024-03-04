import React, { useState } from 'react';

const Login = ({ getToken }) => {

	const [token, setToken] = useState('');
	const [error, setError] = useState('');

	const performLogin = async (username, password) => {
		const response = await fetch('http://localhost:3333/login', {
			method: 'post',
			headers: {
				// Required for ExpressJS to parse body
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
		});

		const data = await response.json();

		if (response.ok && data.uuid) {
			// Authenticated

			setToken(data.uuid)
			getToken(token)

		} else {
			// Authentication failed
			const message = data.message;
			setError(message)

			// Display message to user.
		}
	}


	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = "ttuna@gmail.com"	// e.target.username.value;
		const password = "password" 				// e.target.password.value;

		// See Word document for code example.
		await performLogin(username, password)

		// Token needs to be sent to parent App component.
	}

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 5 }}>
					<label htmlFor='username'>Username: </label>
					<input id='username' name='username' type='text' />
				</div>

				<div style={{ marginBottom: 5 }}>
					<label htmlFor='password'>Password: </label>
					<input id='password' name='password' type='password' />
				</div>

				<span className='error-message'> {error} </span>

				<button type='submit'>Login</button>
			</form>
		</>
	);
}

export default Login;