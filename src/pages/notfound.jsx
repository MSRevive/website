import React from 'react';
import Box from '../components/content/box'

function NotFound()
{
	return (
		<>
			<Box>
				<img src="./assets/gfx/404.png" alt="404" width="250" height="250" className="center" />
				<h1 className="center">This Page is Broken</h1>
				<p className="center">While exploring some adventurers ran into an old man with a certain blue box in the town of helena. Turns out the old man was just an old crazy man from the local tavern and didn't know how to properly use the blue box and thus broke time. What does this have to do with a certain page missing? Simple, it's time so who the hell knows, y'all shouldn't have been missing with it in the first place!</p>
			</Box>
		</>
	);
}

export default NotFound;