import React, { useState } from 'react';

function Logout({ token, onSignout }) {
	const [error, setError] = useState();

	const handleLogout = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3333/logout', {
			method: 'post',
			headers: {
				// Required for ExpressJS to parse body
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
		});

		const data = await response.json();

		if (response.ok) {
			onSignout(data.message)

		} else {
			// Authentication failed
			const message = data.message;
			setError(message)

			// Display message to user.
		}
	}

	// Send request to /logout API endpoint

	// Call onLogout with API message as input.

	// Parent App component needs to notified that logout has occurred.


	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>

			<p> {error} </p>
		</>
	);
}

export default Logout;
