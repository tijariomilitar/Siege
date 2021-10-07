const Signup = ({ leader, box }) => {
	return (
		<div className="box b2 container ground center radius-30 padding-20 noselect" style={{background: `rgb(9,9,9, 0.6)` }}>
			<div className="box b1 em30 bold georgia center" style={{color:'#fff'}}>Siege</div>
			<div className="box b1 em13 underline bold georgia center" style={{color:'#fff'}}>The War Card Game</div>
			<div className="box b1 em13 bold georgia center" style={{color:'#fff'}}>Signup</div>
			<div className="box b2-3 container margin-top-10 center">
				<div className="box b1 container em09 bold" style={{color:"#fff"}}>Nome completo</div>
				<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center"></input>
			</div>
			<div className="box b2-3 container margin-top-10 center">
				<div className="box b1 container em09 bold" style={{color:"#fff"}}>E-mail</div>
				<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center"></input>
			</div>
			<div className="box b2-3 container margin-top-10 center">
				<div className="box b1 container em09 bold" style={{color:"#fff"}}>Usuário</div>
				<input type="text" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center"></input>
			</div>
			<div className="box b2-3 container margin-top-10 center">
				<div className="box b1 container em09 bold" style={{color:"#fff"}}>Senha</div>
				<input type="password" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center"></input>
			</div>
			<div className="box b2-3 container margin-top-10 center">
				<div className="box b1 container em09 bold" style={{color:"#fff"}}>Confirmar senha</div>
				<input type="password" className="box b1 container em12 menu-input1 height-50 transparent cursor-3 center"></input>
			</div>
			<div className="box b2-3 container em13 menu-btn1 height-50 margin-top-10 noselect transparent cursor-3 center"><div className="center" style={{color:"#fff"}}>Cadastrar</div></div>
		</div>
	);
};

export default Signup;