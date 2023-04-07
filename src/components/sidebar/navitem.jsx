import React from 'react';
import './sidebar.css';

function NavItem(props) {
	let icon = props.icon;
	let name = props.name;
	let type = props.type;
	let children = props.children;

	switch(type) {
	case "full":
		return (
			<div className="sidebar-items">
				<div className="item">
					<i>{icon}</i>
					<span className="text">{name}</span>
				</div>
			</div>
		);

	case "stack":
		return (
			<div className="sidebar-items">
				<div className="stack">
					{children}
				</div>
			</div>
		);

	default:
		return (
			<div className="sidebar-items">
				<div className="item">
					<i>{icon}</i>
					<span className="text">{name}</span>
				</div>
			</div>
		);
	};
}

export default NavItem;