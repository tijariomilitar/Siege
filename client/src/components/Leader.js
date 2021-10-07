function importAll(r) {
	let images = {};
	r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
	return images;
};

const images = importAll(require.context('./../image', true));

const Leader = ({ leader, box }) => {
	return (
		<div className={"mobile-box "+box+" radius-10 min-width-50 max-width-175 margin-top-10 shadow-2-hover opacity-out-08 cursor-3"} >
			<div className="bg min-height-200 radius-top-30" style={{ backgroundImage: "url('"+images[leader.image].default+"')" }}></div>
			<div className="mobile-box a1 min-height-50 radius-bottom-30 container ground">
				<div className="mobile-box b1 em08 bold"><div className="center padding-3 noselect" style={{fontColor:'black'}}>{leader.name}</div></div>
			</div>
		</div>
	);
};

export default Leader;