import React from 'react';
import './gallery.css';

function Gallery(props)
{
	let children = props.children;

	return (
		<div className="gallery-container">
			{children}
		</div>
	);
}

export default Gallery;