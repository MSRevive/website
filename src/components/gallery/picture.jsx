import React from 'react';
import './gallery.css';

function Picture(props)
{
	let link = props.link;
	let author = props.author;

	return (
		<div className="imgbox">
			<img className="image" src={link} />
			<div className="text">by {author}</div>
		</div>
	);
}

export default Picture;