import React from 'react';
import './gallery.css';

function Picture(props)
{
	let link = props.link;

	return (
		<div className="imgbox">
			<img className="image" src={link} />
			<div className="text">by calum</div>
		</div>
	);
}

export default Picture;