import Carousel from 'react-elastic-carousel';
import Leader from "./Leader";

const LeaderMenu = ({ collectionLeaders, setLeader, box }) => {
	const onCurrentChange = current => { setLeader(current.item.leader.id); };

    return (
		<Carousel className="box b1 container" showArrows={false} onNextEnd={onCurrentChange} onPrevEnd={onCurrentChange}>
			{ collectionLeaders.map((leader, i) => (<Leader key={leader.id} box={box} leader={leader} />)) }
		</Carousel>
    );
};

export default LeaderMenu;