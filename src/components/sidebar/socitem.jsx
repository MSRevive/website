import React from 'react';
import './sidebar.css';

function SocItem(props) {
	let children = props.children;

	return (
		<div className="sidebar-items">
			<div className="stack">
				{children}
			</div>
		</div>
	);
}

export default SocItem;