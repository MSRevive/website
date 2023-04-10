import React from 'react';
import './staff.css';

function Staff(props)
{
	let avatar = props.avatar;
	let name = props.name;
	let role = props.role;
	let web = props.web;

	return (
		<div className="staff">
			<img className="avatar" src={avatar} />
			<div className="name">{name}</div>
			<div className="role">{role}</div>
			<a className="website" href={web}>{web}</a>
		</div>
	);
}

export default Staff;