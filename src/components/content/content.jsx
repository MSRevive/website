import React from 'react';
import './content.css';

function Content(props)
{
	let title = props.title;
	let text = props.children;

	return (
		<div className="content">
			<div className="title">{title}</div>
			<p>
				{text}
			</p>
		</div>
	);
}

export default Content;