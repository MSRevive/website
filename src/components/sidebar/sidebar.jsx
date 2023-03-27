import React, { useState } from 'react';
import './sidebar.css';

function Sidebar() 
{
	const [isExpanded, setIsExpanded] = useState(true);
	const toggleHandler = () => {
		if (isExpanded) {
			setIsExpanded(false);
			return;
		}

		setIsExpanded(true);
	}

	return (
		<div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
			<div className="sidebar-header">
				<i className="fa fa-fw fa-bars" onClick={toggleHandler}></i>
			</div>
			<div className="sidebar-items">
				<div className="item">
					<i className="fa fa-fw fa-home"></i>
					<span className="text">About</span>
				</div>
				<div className="item">
					<i className="fa fa-fw fa-download"></i>
					<span className="text">Downloads</span>
				</div>
				<div className="item">
					<i className="fa fa-fw fa-info"></i>
					<span className="text">FAQ</span>
				</div>
				<div className="item">
					<i className="fa fa-fw fa-user"></i>
					<span className="text">Dev Team</span>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;