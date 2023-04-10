import React from 'react';
import './content.css';

function Box(props)
{
	let children = props.children;

	return (
		<div className="content">
			{children}
		</div>
	);
}

export default Box;