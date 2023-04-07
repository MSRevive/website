import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaDiscord, FaHome, FaDownload, FaInfoCircle, FaUsers, FaGithub } from "react-icons/fa";
import Sidebar from './components/sidebar/sidebar';
import NavItem from './components/sidebar/navitem';
import SocItem from './components/sidebar/socitem';
import Home from './pages/home';
import NotFound from './pages/notfound';
import NotDone from './pages/notdone';

function App() {
	return (
		<div className="app">
			<Sidebar>
				<NavItem link="/" icon={<FaHome />} name="Home" />
				<NavItem link="/downloads" icon={<FaDownload />} name="Downloads" />
				<NavItem link="/info" icon={<FaInfoCircle />} name="Info" />
				<NavItem link="/team" icon={<FaUsers />} name="Dev Team" />
				<SocItem>
					<a href="https://discord.gg/nwJB9EhAN6"><FaDiscord /></a>
					<a href="https://github.com/MSRevive"><FaGithub /></a>
				</SocItem>
			</Sidebar>

			<div className="wrapper">
				<div className="content-container">
					<img src="./assets/hero.png" className="logo"></img>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/downloads" element={<NotDone />} />
						<Route path="/info" element={<NotDone />} />
						<Route path="/team" element={<NotDone />} />
						<Route path="*" element={<NotFound />} />
					</Routes>

					<div className="footer">&#169; Team MSRebirth. Goldsource & Half-Life are trademarks of Valve Corporation.</div>
				</div>
			</div>
		</div>
	);
}

export default App