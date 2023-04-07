import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from "react-icons/fa";
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
					<div className="item">
						<i onClick={toggleHandler}><FaBars /></i>
					</div>
				</div>
	
				{children}
			</div>
		);
	}else{
		return (
			<div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
				<div className="sidebar-header">
					<div className="item">
						<i onClick={toggleHandler}><FaBars /></i>
					</div>
				</div>
	
				{children}
			</div>
		);
	}
}

export default Sidebar;