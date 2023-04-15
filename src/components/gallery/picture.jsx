import React from 'react';
import './gallery.css';

function Picture(props)
{
	let link = props.link;

	return (
		<img className="picture" src={link} />
	);
}

export default Picture;