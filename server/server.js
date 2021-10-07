const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });
const cors = require("cors");

let corsOptions = { origin: '*', optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

let ranges = [
	{ id: 1, name: 'Close', description: 'Ataque corpo a corpo', img: 'icon/range/close.png', wimg: 'icon/range/close-white.png' },
	{ id: 2, name: 'Ranged', description: 'Ataque de média distância', img: 'icon/range/ranged.png', wimg: 'icon/range/ranged-white.png' },
	{ id: 3, name: 'Siege', description: 'Ataque de longa distância', img: 'icon/range/siege.png', wimg: 'icon/range/siege-white.png' },
	{ id: 4, name: 'Agile', description: 'Ataque curta e média distância', img: 'icon/range/agile.png', wimg: 'icon/range/agile-white.png' }
];

let abilities = [
	{ id: 1, name: "Promote", img: "icon/ability/promote.png", wimg: "icon/ability/promote-white.png" },
	{ id: 2, name: "Decoy", img: "icon/ability/decoy.png", wimg: "icon/ability/decoy-white.png" },
	{ id: 3, name: "Medic", img: "icon/ability/medic.png", wimg: "icon/ability/medic-white.png" },
	{ id: 4, name: "Boost", img: "icon/ability/boost.png", wimg: "icon/ability/boost-white.png" },
	{ id: 5, name: "Army", img: "icon/ability/army.png", wimg: "icon/ability/army-white.png" },
	{ id: 6, name: "Burn", img: "icon/ability/burn.png", wimg: "icon/ability/burn-white.png" },
	{ id: 7, name: "Hostage", img: "icon/ability/hostage.png", wimg: "icon/ability/hostage-white.png" },
	{ id: 8, name: "Bond", img: "icon/ability/bond.png", wimg: "icon/ability/bond-white.png" },
	{ id: 9, name: "Clear", img: "icon/weather/clear.png", wimg: "icon/weather/clear-white.png" },
	{ id: 10, name: "Frost", img: "icon/weather/frost.png", wimg: "icon/weather/frost-white.png" },
	{ id: 11, name: "Fog", img: "icon/weather/fog.png", wimg: "icon/weather/fog-white.png" },
	{ id: 12, name: "Rain", img: "icon/weather/rain.png", wimg: "icon/weather/rain-white.png" }
];

let empires = [
	{ id: 1, name: "Império Romano", skill: "Dobra a força das unidades de ataque corpo a corpo." },
	{ id: 2, name: "Dinastias Asiáticas", skill: "Wins any round that ends in a draw." },
	{ id: 3, name: "Reinos Nórdicos", skill: "Grants an extra card upon winning a round." },
	{ id: 4, name: "Potências Intelectuais", skill: "Decides who takes first turn." }
];

let leaders = [
	{ id: 1, empire: "Império Romano", name: "Julio César", image: "card/rome/julio-cesar.png" },
	{ id: 2, empire: "Império Romano", name: "Marcos rois", image: "card/rome/legacy.png" },
	{ id: 3, empire: "Império Romano", name: "Alexandre O grande", image: "card/rome/centurion4.png" },
	// { id: 2, empire: 'Dinastias Asiáticas', name: "Sun Tzu", power: 15, skill_id: 0, hero: true, deck_id: 0, image: "https://media.nationalgeographic.org/assets/photos/262/373/c5636498-6c05-4547-a54a-f8522ba943b4.jpg" },
	// { id: 3, empire: 'Reinos Nórdicos', name: "Carl von Clausewitz", power: 15, skill_id: 0, hero: true, deck_id: 0, image: "https://pbs.twimg.com/media/Emo6LbSWEAEPLFQ.jpg" },
	// { id: 4, empire: 'Potências Intelectuais', name: "Alexandre, O grande", power: 15, skill_id: 0, hero: true, deck_id: 0, image: "https://www.suapesquisa.com/uploads/site/napoleao_bonaparte_pintura.jpg" },
];

let cards = [ 
	{ id: 1, deck: false, name: "Céu limpo", weather: true, ability: 'Clear', image: "card/weather/clear.png" },
	{ id: 2, deck: false, name: "Céu limpo", weather: true, ability: 'Clear', image: "card/weather/clear.png" },
	{ id: 3, deck: false, name: "Céu limpo", weather: true, ability: 'Clear', image: "card/weather/clear.png" },
	{ id: 4, deck: false, name: "Nevasca Impiedosa", weather: true, ability: 'Frost', image: "card/weather/frost.png" },
	{ id: 5, deck: false, name: "Nevasca Impiedosa", weather: true, ability: 'Frost', image: "card/weather/frost.png" },
	{ id: 6, deck: false, name: "Nevasca Impiedosa", weather: true, ability: 'Frost', image: "card/weather/frost.png" },
	{ id: 7, deck: false, name: "Neblina Severa", weather: true, ability: 'Fog', image: "card/weather/fog.png" },
	{ id: 8, deck: false, name: "Neblina Severa", weather: true, ability: 'Fog', image: "card/weather/fog.png" },
	{ id: 9, deck: false, name: "Neblina Severa", weather: true, ability: 'Fog', image: "card/weather/fog.png" },
	{ id: 10, deck: false, name: "Temporal", weather: true, ability: 'Rain', image: "card/weather/rain.png" },
	{ id: 11, deck: false, name: "Temporal", weather: true, ability: 'Rain', image: "card/weather/rain.png" },
	{ id: 12, deck: false, name: "Temporal", weather: true, ability: 'Rain', image: "card/weather/rain.png" },
	{ id: 13, deck: false, name: "Fogaréu", power: false, ability: 'Burn', image: "card/special/burn.png" },
	{ id: 14, deck: false, name: "Fogaréu", power: false, ability: 'Burn', image: "card/special/burn.png" },
	{ id: 15, deck: false, name: "Fogaréu", power: false, ability: 'Burn', image: "card/special/burn.png" },
	{ id: 16, deck: false, name: "Grande General", power: false, ability: 'Promote', image: "card/special/general.png" },
	{ id: 17, deck: false, name: "Grande General", power: false, ability: 'Promote', image: "card/special/general.png" },
	{ id: 18, deck: false, name: "Grande General", power: false, ability: 'Promote', image: "card/special/general.png" },
	{ id: 19, deck: 1, hero: true, range: "Close", name: "Marco Vipsânio Agripa", power: 15, image: "card/rome/agripa.png" },
	{ id: 20, deck: 1, hero: true, range: "Close", name: "Cornélio Cipião Africano", power: 10, image: "card/rome/cipiao.png" },
	{ id: 21, deck: 1, hero: true, range: "Close", name: "Lúcio Emílio Paulo Macedônico", power: 7, image: "card/rome/aemilius.png" },
	{ id: 22, deck: 1, hero: false, range: "Close", name: "Legado", power: 2, ability: "Promote", image: "card/rome/legacy.png" },
	{ id: 23, deck: 1, hero: false, range: "Close", name: "Legado", power: 2, ability: "Promote", image: "card/rome/legacy2.png" },
	{ id: 24, deck: 1, hero: false, range: "Close", name: "Centurião", power: 5, ability: "Bond", image: "card/rome/centurion.png" },
	{ id: 25, deck: 1, hero: false, range: "Close", name: "Centurião", power: 5, ability: "Bond", image: "card/rome/centurion2.png" },
	{ id: 26, deck: 1, hero: false, range: "Close", name: "Centurião", power: 5, ability: "Bond", image: "card/rome/centurion3.png" },
	{ id: 27, deck: 1, hero: false, range: "Close", name: "Centurião", power: 5, ability: "Bond", image: "card/rome/centurion4.png" },
	{ id: 28, deck: 1, hero: false, range: "Close", name: "Centúria Romana", power: 8, ability: "Army", image: "card/rome/century.png" },
	{ id: 29, deck: 1, hero: false, range: "Close", name: "Centúria Romana", power: 8, ability: "Army", image: "card/rome/century2.png" },
	{ id: 30, deck: 1, hero: false, range: "Close", name: "Centúria Romana", power: 8, ability: "Army", image: "card/rome/century3.png" },
	{ id: 31, deck: 1, hero: false, range: "Close", name: "Legionario", power: 7, image: "card/rome/legionary.png" },
	{ id: 32, deck: 1, hero: false, range: "Close", name: "Legionario", power: 5, image: "card/rome/legionary2.png" },
	{ id: 33, deck: 1, hero: false, range: "Close", name: "Legionario", power: 5, image: "card/rome/legionary3.png" },
	{ id: 34, deck: 1, hero: false, range: "Ranged", name: "Lançador de Plumbata", power: 6, image: "card/rome/plumbata.png" },
	{ id: 35, deck: 1, hero: false, range: "Ranged", name: "Lançador de Plumbata", power: 3, image: "card/rome/plumbata2.png" },
	{ id: 36, deck: 1, hero: false, range: "Ranged", name: "Lançador de Plumbata", power: 4, image: "card/rome/plumbata3.png" },
	{ id: 37, deck: 1, hero: false, range: "Siege", name: "Paulo de Tarso", power: 1, ability: "Medic", image: "card/rome/tarso.png" },

	// { id: 1, deck: false, hero: true, range: "Close", name: "King Arthur", power: 15, ability: "Army", image: "https://i.pinimg.com/originals/08/5a/c9/085ac972d047c3f484a3cc295ae1ca49.jpg" },
	// { id: 2, deck: false, hero: false, range: "Close", name: "Richard the Lionheart", power: 6, ability: false, image: "https://i.pinimg.com/originals/e9/52/46/e95246eaf5cf57a140bbdf403bf50335.jpg" },
	// { id: 3, deck: 1, hero: false, range: "Close", name: "Alexander Nevsky", power: 2, ability: 'Promote', image: "https://images.squarespace-cdn.com/content/v1/5dc1ee8ec842b271464dc6ee/1573249399079-0A56TQNBC7NQTO671GST/nevsky.jpg" },
	// { id: 4, deck: 1, hero: true, range: "Ranged", name: "Jair Messias Bolsonaro", power: 15, ability: "Boost", image: "https://i.pinimg.com/236x/44/e5/8f/44e58f36e43f76ae20ecc82038ce73a9.jpg" },
	// { id: 5, deck: 1, hero: false, range: "Ranged", name: "Edward The Black Prince", power: 6, ability: "Decoy", image: "https://c8.alamy.com/comp/2A602XK/edward-the-black-prince-1330-76-commanding-the-right-wind-of-the-english-troops-at-the-battle-of-crecy-1346-when-he-was-only-16-hundred-years-war-between-england-and-france-2A602XK.jpg" },
	// { id: 6, deck: 1, hero: false, range: "Ranged", name: "El Cid", power: 6, ability: "Medic", image: "https://cdna.artstation.com/p/assets/images/images/019/643/760/large/javier-alcalde-el-cid-color-03-by-javieralcalde.jpg?1564413291" },
	// { id: 7, deck: 1, hero: true, range: "Siege", name: "Leonidas", power: 6, ability: "Burn", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8932fa02-b339-4e8c-99d6-115e7cd29415/d1k5x59-802e3dfa-b2f0-41e0-a33f-34cf0a925a44.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MzJmYTAyLWIzMzktNGU4Yy05OWQ2LTExNWU3Y2QyOTQxNVwvZDFrNXg1OS04MDJlM2RmYS1iMmYwLTQxZTAtYTMzZi0zNGNmMGE5MjVhNDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FoQHyTpw2cjm1zpOyKwt2_EBxVlijsKUtHq9RwBvCyI" },
	// { id: 8, deck: 1, hero: true, range: "Siege", name: "Ragnar Lothbrok", power: 6, ability: "Hostage", image: "https://img.estadao.com.br/fotos/crop/1200x900/resources/jpg/8/2/1590876787228.jpg" },
	// { id: 9, deck: 1, hero: false, range: "Siege", name: "Eric Bloodaxe", power: 6, ability: "Bond", image: "https://3.bp.blogspot.com/-6RL4Xe39M80/Vxnzsj8gsFI/AAAAAAAAFlE/3Lq4xraN3ZkXmvxCx8RH0tgOrS3J5ClbwCLcB/s1600/Viking%2Bready%2Bfor%2Bbattle.jpg" },
	// { id: 10, deck: 1, hero: false, range: "Agile", name: "Freydis Eriksdottir", power: 6, ability: false, image: "https://i.pinimg.com/736x/f1/cd/68/f1cd685ea7fe924dddebb2ff68116b16.jpg" },
	// { id: 11, deck: 1, hero: false, range: "Agile", name: "Harald Hardrada", power: 6, ability: false, image: "http://cdn.shopify.com/s/files/1/1879/3511/files/viking-battle-raid-harald-hardrada_grande.jpg?v=1555466391" },
	// { id: 12, deck: 1, hero: false, range: "Agile", name: "Willian Wallace", power: 6, ability: false, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8932fa02-b339-4e8c-99d6-115e7cd29415/di1ekn-bc3cf8a0-3ab8-46ca-8702-8b38b75a290e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MzJmYTAyLWIzMzktNGU4Yy05OWQ2LTExNWU3Y2QyOTQxNVwvZGkxZWtuLWJjM2NmOGEwLTNhYjgtNDZjYS04NzAyLThiMzhiNzVhMjkwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6crVdGZD5Co7i5mqzDkJz9TStPVk5sr_Qnd1Xk-2mlg" },
	// { id: 12, deck: 1, hero: false, range: "Agile", name: "Sila", power: 2, ability: "Promote", image: "" },
];

app.get('/leaders', (req, res) => { 
	res.send(leaders);
});

app.get('/ranges', (req, res) => { res.send(ranges); });

app.get('/cards', (req, res) => {
	cards.forEach(card => {
		ranges.forEach(range => {
			if(card.range === range.name){
				if(card.hero) { card.range_img = range.wimg; }
				else { card.range_img = range.img; }
			};
		});
	});

	cards.forEach(card => {
		abilities.forEach(ability => {
			if(card.ability === ability.name){
				if(card.hero) { card.ability_img = ability.wimg; }
				else { card.ability_img = ability.img; }
			};
		});
	});

	res.send(cards);
});

app.get('/cards/range/:id', (req, res) => {
	res.send(cards);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});