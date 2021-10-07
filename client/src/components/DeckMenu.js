import React, { useState, useEffect } from 'react';
// import io from "socket.io-client";

import Deck from "./Deck";
import Card from "./Card";
import Lib from "./../lib";
// import EmpireMenu from "./EmpireMenu";
import LeaderMenu from "./LeaderMenu";

import home_icon from "./../image/icon/home-white.png";
// const socket = io("localhost:3001");
const DeckMenu = ({ setScreen }) => {
	let [collectionCards, setCollectionCards] = useState([]);
	let [deckCards, setDeckCards] = useState([]);
	let [leaders, setLeaders] = useState([]);

	useEffect(() => { fetch("http://localhost:3001/leaders/")
		.then(res => res.json()).then(data => setLeaders(data));
	}, []);

	useEffect(() => { fetch("http://localhost:3001/cards")
		.then(res => res.json()).then(data => setCollectionCards(data)); 
	}, []);

	let switchCardToDeck = (card_id) => {
		let newCollection = [];
		collectionCards.forEach(card => {
			if(card.id === card_id){ setDeckCards(Lib.sort([...deckCards, card], 'id')); }
			else { newCollection.push(card); }
		});
		setCollectionCards(Lib.sort(newCollection, 'id'));
	};

	let switchCardToCollection = (card_id) => {
		let newDeck = [];
		deckCards.forEach(card => {
			if(card.id === card_id){ setCollectionCards(Lib.sort([...collectionCards, card], 'id')); }
			else { newDeck.push(card); }
		});
		setDeckCards(Lib.sort(newDeck, 'id'));
	};

	return (
		<div className="container h-center cursor-1">
			<div className="mobile-box b1 container" style={{ height: window.innerHeight*0.1 }}>
				<div className="mobile-box b8 container" style={{height: window.innerHeight*0.099}}>
					<div className="bg box b1 size-30 center opacity-out-08" style={{color:'#fff', backgroundImage: "url("+home_icon+")"}}
					onClick={() => setScreen('home')}></div>
				</div>
				<div className="mobile-box b3-4" style={{height: window.innerHeight*0.099}}><div className="center">Selecionar Soberania</div></div>
			</div>
			<div className="mobile-box a2-5 container padding-10">
				<div className="mobile-box b1 bold padding-10 georgia center noselect" style={{color:"#fff"}}>{"Coleção de cartas"}</div>
				<Deck title="Coleção de cartas" cards={collectionCards} container={window.innerHeight*0.7 } box="b3" switchCardTo={switchCardToDeck}/>
			</div>
			<div className="mobile-box a5 container padding-10 h-center">
				<div className="mobile-box b1 center opacity-08 noselect" style={{color: '#e4ba75'}}>Líder</div>
				<LeaderMenu leaders={leaders} box={"b1"} />
				<deckInfo collection={collectionCards} deck={deckCards} />
			</div>
			<div className="mobile-box a2-5 container padding-10">
				<div className="mobile-box b1 bold padding-10 georgia center noselect" style={{color:"#fff"}}>{"Cartas no baralho"}</div>
				<Deck title="Coleção de cartas" cards={deckCards} container={window.innerHeight*0.7 } box="b3" switchCardTo={switchCardToCollection} />
			</div>
		</div>
	);
};

export default DeckMenu;