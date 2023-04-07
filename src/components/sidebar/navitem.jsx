import React from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';

function NavItem(props) {
	let link = props.link;
	let icon = props.icon;
	let name = props.name;

	return (
		<div className="sidebar-items">
			<Link to={link} className="item">
				<i>{icon}</i>
				<span className="text">{name}</span>
			</Link>
		</div>
	);
}

export default NavItem;