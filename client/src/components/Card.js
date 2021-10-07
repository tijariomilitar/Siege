function importAll(r) {
	let images = {};
	r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
	return images;
};

const images = importAll(require.context('./../image', true));

const Card = ({ card, box, switchCardTo }) => {
	return (
		<div className={"mobile-box "+box+" radius-10 margin-top-10 shadow-2-hover opacity-out-08 cursor-3"} onClick={() => switchCardTo(card.id) } >
			<div className="bg min-height-200 radius-top-30" style={{ backgroundImage: "url('"+images[card.image].default+"')" }}>
				<div className="mobile-box b1 container">
					{card.power && <div className="mobile-box b1 container padding-2 min-width-30"><div className="mobile-box dot container ring" style={card.hero ? { backgroundColor:'#111', color: '#fff'} : { backgroundColor : '#fff', color: '#111' }}><div className="center noselect bold">{card.power}</div></div></div>}
					{card.range && <div className="mobile-box b1 container padding-2 margin-top-10"><div className="mobile-box dot container ring" style={card.hero ? { backgroundColor:'#111'} : { backgroundColor : '#fff' }}><div className="center noselect bold"><div className="size-20 bg" style={{backgroundImage: "url("+images[card.range_img].default+")"}} /></div></div></div>}
					{card.ability && <div className="mobile-box b1 container padding-2 margin-top-10"><div className="mobile-box dot container ring" style={card.hero ? { backgroundColor:'#111'} : { backgroundColor : '#fff' }}><div className="center noselect bold"><div className="size-20 bg" style={{backgroundImage: "url("+images[card.ability_img].default+")"}} /></div></div></div>}
				</div>
			</div>
			<div className="mobile-box a1 min-height-50 radius-bottom-30 container ground">
				<div className="mobile-box b1 em08 bold"><div className="center padding-3 noselect" style={{fontColor:'black'}}>{card.name}</div></div>
			</div>
		</div>
	);
};

export default Card;