import React from 'react';
import Box from '../components/content/box'

function NotDone()
{
	return (
		<>
			<Box>
				<img src="./assets/notdone.png" alt="not done" width="250" height="250" className="center" />
				<h1 className="center">Caution! This Page is Not Done</h1>
				<p className="center">Do not worry, we have hired some brave if not foolish adventurers to transverse through The Wall for the missing pieces.</p>
			</Box>
		</>
	);
}

export default NotDone;