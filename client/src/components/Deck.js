import React, { useState, useEffect } from 'react';

import Card from "./Card";

import cards_icon from "./../image/icon/range/cards-white.png";
import close_icon from "./../image/icon/range/close-white.png";
import ranged_icon from "./../image/icon/range/ranged-white.png";
import agile_icon from "./../image/icon/range/agile-white.png";
import siege_icon from "./../image/icon/range/siege-white.png";

const Deck = ({title, container, cards, box, switchCardTo}) => {
	let [category, setCategory] = useState('cards');
	let [ranges, setRanges] = useState([]);
	let [rangeDescription, setRangeDescription] = useState('Todas as cartas');
	let [isPending, setIsPending] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3001/ranges")
		.then(res => res.json())
		.then(data => {
			setRanges(data);
			setIsPending(false);
		});
	}, []);

	useEffect(() => {
		if(category === 'cards'){ setRangeDescription("Todas as cartas"); } 
		else { ranges.find(range => range.name === category ? setRangeDescription(range.description) : false ); }
	}, [category, ranges]);

	switch(isPending){
		case true:
			return renderLoadScreen();
		case false:
			return renderDeckScreen();
		default:
			return renderLoadScreen();
	};

	function renderLoadScreen(){
		return (
			<div className="box b1 h-center">
				<div className="box container loader center margin-top-50" style={{color:"#fff"}}></div>
			</div>
		);
	};

	function renderDeckScreen(){
		return (
			<div className="mobile-box b1 container">
				<div className="box b1 center em09 padding-5 bold noselect" style={{color:"#975"}}>{category === 'cards' ? 'Todas as cartas' : rangeDescription }</div>
				<div className="mobile-box b1 container center padding-left-20 padding-right-20 margin-top-5">
					<div className="mobile-box b5"><div className="size-35 bg opacity-out-07 center cursor-2" style={{ backgroundImage: "url("+cards_icon+")" }} onClick={() => setCategory('cards')}></div></div>
					<div className="mobile-box b5"><div className="size-35 bg opacity-out-07 center cursor-2" style={{ backgroundImage: "url("+close_icon+")" }} onClick={() => setCategory('Close')}></div></div>
					<div className="mobile-box b5"><div className="size-35 bg opacity-out-07 center cursor-2" style={{ backgroundImage: "url("+ranged_icon+")" }} onClick={() => setCategory('Ranged')}></div></div>
					<div className="mobile-box b5"><div className="size-35 bg opacity-out-07 center cursor-2" style={{ backgroundImage: "url("+siege_icon+")" }} onClick={() => setCategory('Siege')}></div></div>
					<div className="mobile-box b5"><div className="size-35 bg opacity-out-07 center cursor-2" style={{ backgroundImage: "url("+agile_icon+")" }} onClick={() => setCategory('Agile')}></div></div>
				</div>
				<div className="mobile-box b1 container padding-15 scroll-y scroll-1 margin-top-5" style={{ maxHeight: container }}>
					{ category === 'cards' ? (cards.map((card) => (<Card key={card.id} box={box} card={card} switchCardTo={switchCardTo} />))) : 
					( cards.map((card) => card.range === category ? (<Card key={card.id} box={box} card={card} switchCardTo={switchCardTo} />) : false) )}
				</div>
			</div>
		);	
	};
};

export default Deck;