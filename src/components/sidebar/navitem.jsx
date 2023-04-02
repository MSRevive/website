import React from 'react';
import './sidebar.css';

function NavItem(props) {
	let icon = props.icon;
	let name = props.name;

	return (
		<div className="sidebar-items">
			<div className="item">
				<i className={`fa fa-fw ${icon}`}></i>
				<span className="text">{name}</span>
			</div>
		</div>
	);
}

export default NavItem;