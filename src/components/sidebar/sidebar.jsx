import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './sidebar.css';

function Sidebar({ children }) {
	const [isExpanded, setIsExpanded] = useState(true);
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	const toggleHandler = () => {
		if (isExpanded) {
			setIsExpanded(false);
			return;
		}

		setIsExpanded(true);
	}

	if (isMobile)
	{
		return (
			<div className={isExpanded ? "sidebar collapsed" : "sidebar"}>
				<div className="sidebar-header">
					<i className="fa fa-fw fa-bars" onClick={toggleHandler}></i>
				</div>
	
				{children}
			</div>
		);
	}else{
		return (
			<div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
				<div className="sidebar-header">
					<i className="fa fa-fw fa-bars" onClick={toggleHandler}></i>
				</div>
	
				{children}
			</div>
		);
	}
}

export default Sidebar;