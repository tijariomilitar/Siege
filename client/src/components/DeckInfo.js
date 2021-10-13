function DeckInfo({ deckLeader, collection, deck }){
	return (
		<div className="box b1 container padding-10 h-center">
			<div className="box b1 em08 center margin-top-5 noselect" style={{color:"#d0a661"}}>Líder atual</div>
			{deckLeader && <div className="box b1 em09 center margin-top-2 bold noselect" style={{color:"#975"}}>{deckLeader.name}</div>}
			<div className="box b1 em08 center margin-top-10 noselect" style={{color:"#d0a661"}}>Total de cartas</div>
			<div className="box b1 em09 center margin-top-2 bold noselect" style={{color:"#975"}}>{collection.length + deck.length}</div>
			<div className="box b1 em08 center margin-top-10 noselect" style={{color:"#d0a661"}}>Cartas no baralho</div>
			<div className="box b1 em09 center margin-top-2 bold noselect" style={{color:"#975"}}>{deck.length + "/22"}</div>			
		</div>
	)
};

export default DeckInfo;