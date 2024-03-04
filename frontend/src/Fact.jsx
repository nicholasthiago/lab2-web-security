import React, { useState, useEffect } from 'react';

function Fact({ token }) {
	const [fact, setFact] = useState('');
	const [loading, setLoading] = useState(true);

	// See Word document for code example on fetching a fact.

	// Fact will be fetched automatically when component is first mounted.
	const getFact = async () => {
		const response = await fetch('http://localhost:3333/fact', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const data = await response.json();

		setFact(data.fact);
		setLoading(false)
	}

	useEffect(() => {
		if (loading) {
			getFact()
		}
	})


	if (loading) {
		return <p> {'Loading...'} </p>

	} else {
		return (
			<>
				<h1>Fact</h1>

				<p>{fact}</p>
			</>
		);
	}
}

export default Fact;
