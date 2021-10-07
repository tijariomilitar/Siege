import { useState } from 'react';
import DeckMenu from './DeckMenu';
import Signup from './../menu/Signup';

function App() {
	let [screen, setScreen] = useState('home')

	switch(screen){
		case 'index':
			return renderIndex();
		case 'signup':
			return renderSignup();
		// case 'login':
		// 	return renderLogin();
		case 'home':
			return renderHome();
		case 'deckMenu':
			return renderDeckMenu();
	};

	function renderIndex() {
		return (
			<div className="container bg h-center cursor-1" style={styles.home}>
				<div className="box b2 container ground center radius-30 padding-20 noselect h-center" style={{background: `rgb(9,9,9, 0.6)` }}>
					<div className="box b1 em30 bold georgia center" style={{color:'#fff'}}>Siege</div>
					<div className="box b1 em13 underline bold georgia center" style={{color:'#fff'}}>The War Card Game</div>
					<div className="box b2 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('login')}><div className="box b1 center bold avant-garde" style={{color:'#fff'}}>Entrar</div></div>
					<div className="box b2 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('signup')}><div className="box b1 center bold avant-garde" style={{color:'#fff'}}>Criar conta</div></div>
				</div>
			</div>
		);
	};

	function renderSignup() {
		return (
			<div className="container bg h-center cursor-1" style={styles.home}>
				<Signup/>
			</div>
		);
	};

	function renderLogin() {
		return (
			<div className="container bg h-center cursor-1" style={styles.home}>
				<div className="box b2 container ground center radius-30 padding-20 noselect h-center" style={{background: `rgb(9,9,9, 0.6)` }}>
					<div className="box b1 em30 bold georgia center" style={{color:'#fff'}}>Siege</div>
					<div className="box b1 em13 underline bold georgia center" style={{color:'#fff'}}>The War Card Game</div>
				</div>
			</div>
		);
	};

	function renderHome() {
		return (
			<div className="container bg h-center cursor-1" style={styles.home}>
				<div className="box b2 container ground center radius-30 padding-20 noselect h-center" style={{background: `rgb(9,9,9, 0.6)` }}>
					<div className="box b1 em30 bold georgia center" style={{color:'#fff'}}>Siege</div>
					<div className="box b1 em13 underline bold georgia center" style={{color:'#fff'}}>The War Card Game</div>
					<div className="box b2-3 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('deckMenu')}><div className="box b1 center bold" style={{color:'#fff'}}>NEW GAME</div></div>
					<div className="box b2-3 container menu-btn2 height-50 margin-top-10 noselect cursor-3" onClick={() => setScreen('deckMenu')}><div className="box b1 center bold" style={{color:'#fff'}}>DECK MENU</div></div>
				</div>
			</div>
		);
	};

	function renderDeckMenu() {
		return (
			<DeckMenu setScreen={setScreen} />
		);
	};
};

let styles = {
	home: {
		backgroundImage: 'url("https://i.pinimg.com/originals/40/24/0f/40240f3848e82d04cba95c1e7fb952c5.jpg")',
		height: window.innerHeight
	}
}

export default App;