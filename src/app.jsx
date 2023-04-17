import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaDiscord, FaHome, FaDownload, FaInfoCircle, FaImages, FaUsers, FaGithub } from "react-icons/fa";
import Page from './components/page';
import Sidebar from './components/sidebar/sidebar';
import NavItem from './components/sidebar/navitem';
import SocItem from './components/sidebar/socitem';
import Home from './pages/home';
import Team from './pages/team';
import GalleryPage from './pages/gallerypage';
import Downloads from './pages/downloads';
import NotFound from './pages/notfound';
import NotDone from './pages/notdone';

function App() {
	return (
		<div className="app">
			<Sidebar>
				<NavItem link="/" icon={<FaHome />} name="Home" />
				<NavItem link="/downloads" icon={<FaDownload />} name="Downloads" />
				<NavItem link="/info" icon={<FaInfoCircle />} name="Info" />
				<NavItem link="/gallery" icon={<FaImages />} name="Gallery" />
				<NavItem link="/team" icon={<FaUsers />} name="Dev Team" />
				<SocItem>
					<a href="https://discord.gg/nwJB9EhAN6"><FaDiscord /></a>
					<a href="https://github.com/MSRevive"><FaGithub /></a>
				</SocItem>
			</Sidebar>

			<div className="wrapper">
				<div className="content-container">
					<img src="./assets/gfx/hero.png" className="logo"></img>

					<Routes>
						<Route path="/" element={<Page title="Home"><Home /></Page>} />
						<Route path="/downloads" element={<Page title="Downloads"><Downloads /></Page>} />
						<Route path="/info" element={<Page title="Info"><NotDone /></Page>} />
						<Route path="/gallery" element={<Page title="Gallery"><GalleryPage /></Page>} />
						<Route path="/team" element={<Page title="Team"><Team /></Page>} />
						<Route path="*" element={<Page title="404"><NotFound /></Page>} />
					</Routes>

					<div className="footer">&#169; Team MSRebirth. Goldsrc & Half-Life are trademarks of Valve Corporation.</div>
				</div>
			</div>
		</div>
	);
}

export default App