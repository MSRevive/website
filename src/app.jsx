import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import NavItem from './components/sidebar/navitem';
//import Content from './components/content/content';

function App() {
	return (
		<div className="App">
			<Sidebar>
				<NavItem icon="fa-home" name="About" />
				<NavItem icon="fa-download" name="Downloads" />
				<NavItem icon="fa-info" name="Info" />
				<NavItem icon="fa-user" name="Dev Team" />
			</Sidebar>
		</div>
	);
}

export default App