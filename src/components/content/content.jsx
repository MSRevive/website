import React from 'react';
import './content.css';

function Content(props)
{
	let title = props.title;
	let children = props.children;

	return (
		<div className="content">
			<div className="title">{title}</div>
			<p>
				{children}
			</p>
		</div>
	);
}

export default Content;