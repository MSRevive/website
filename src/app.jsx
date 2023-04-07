import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import NavItem from './components/sidebar/navitem';
import Content from './components/content/content';

function App() {
	return (
		<div className="app">
			<Sidebar>
				<NavItem icon="fa-home" name="About" />
				<NavItem icon="fa-download" name="Downloads" />
				<NavItem icon="fa-info" name="Info" />
				<NavItem icon="fa-user" name="Dev Team" />
			</Sidebar>

			<div className="wrapper">
				<div className="content-container">
					<img src="./assets/hero.png" className="logo"></img>

					<Content title="Unicorns and pixie dust!">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget risus in metus venenatis mattis. Quisque odio massa, efficitur quis vehicula vitae, congue nec orci. Nullam id ligula sit amet mauris pharetra hendrerit at in magna. Aenean id sollicitudin arcu, ac lacinia elit. Nunc sed ex dignissim, egestas diam vel, bibendum elit. Duis volutpat efficitur enim a congue. Praesent sodales ligula non semper ultricies. Vestibulum tristique vitae tellus eu volutpat. Suspendisse potenti. Phasellus vel nunc est. Nullam nec laoreet metus. In viverra tristique turpis, non rhoncus nibh euismod at. Integer vestibulum lacus ut lacus sodales faucibus. Donec augue dolor, pulvinar sed aliquam nec, maximus vitae magna. In eleifend orci a enim venenatis, non bibendum nibh gravida.

Vestibulum eget diam bibendum, sollicitudin tortor nec, scelerisque dui. Aenean elementum orci vel tempus ultrices. In non euismod nisi. Morbi pulvinar, justo in viverra commodo, erat diam dictum tortor, sed eleifend nunc magna in eros. Donec eget mi nibh. Aenean vel libero id sem dapibus dapibus in vitae turpis. Donec ultricies nisi et felis rutrum, at fermentum turpis tempus. Aliquam eu nulla vulputate, ornare velit quis, pharetra turpis. Sed pulvinar ligula ut lacus varius consequat. Ut id tempor quam. Donec hendrerit cursus elit, at commodo ante congue ut. Ut nulla nulla, auctor consequat sollicitudin sed, fringilla auctor odio. Quisque id lacus vel quam fermentum sagittis. Etiam mollis odio eget risus egestas mattis nec eu lectus. Donec rutrum ultrices efficitur.

Maecenas augue massa, venenatis luctus condimentum et, interdum ut diam. Proin mattis diam eros, condimentum faucibus purus tempor ac. Nunc id nisi tempor erat tincidunt finibus et eget turpis. Duis sed ligula libero. Phasellus magna augue, iaculis vitae metus ut, laoreet semper sapien. In suscipit interdum faucibus. Pellentesque sit amet fermentum ipsum, in tincidunt nibh. Morbi aliquet tellus finibus diam convallis accumsan. Nunc semper nec neque a aliquet. Ut nisi quam, finibus sed posuere ut, pretium eu nulla. Phasellus vitae rhoncus turpis, nec viverra neque. Vivamus sed tempus felis. Donec pellentesque at odio nec sodales. Nullam enim velit, elementum sed feugiat vel, dapibus in massa. Mauris vitae luctus mauris. Aliquam tristique consequat elit non finibus.

Aenean maximus est at tempor mollis. Nam id ipsum tortor. Donec congue ante lorem, eget tincidunt nulla lobortis ac. Quisque a lorem id purus laoreet hendrerit. Phasellus auctor vestibulum massa, a congue nisl aliquet nec. Etiam porta velit id est vestibulum, eget tempor dolor varius. Ut non enim a magna pellentesque cursus in vitae neque. Nullam ut ultricies nisi, eu sodales turpis. Proin non nulla posuere, commodo sem sed, imperdiet est.

Fusce dapibus, ante et aliquet efficitur, est justo sodales erat, sed finibus libero urna sit amet sapien. Nullam nulla dui, bibendum ac lacus vel, maximus bibendum mauris. Curabitur ut ornare metus. Morbi eget tristique libero. Donec volutpat euismod elit, vel rutrum lectus interdum vitae. Sed ac ipsum nec ligula vehicula rhoncus a quis arcu. Duis pretium libero nec nunc dignissim, ac vehicula turpis convallis. Maecenas at maximus velit. Sed posuere malesuada cursus. Sed pharetra dui in sapien ultrices tempor. Vestibulum ut urna velit. Aliquam at massa metus. Cras ultricies orci vel erat congue, sed pretium odio elementum. Curabitur at metus rhoncus, cursus orci id, laoreet magna. Aliquam dictum metus in maximus bibendum. 
					</Content>
				</div>
			</div>
		</div>
	);
}

export default App