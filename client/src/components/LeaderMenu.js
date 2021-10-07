import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Leader from "./Leader";

const LeaderMenu = ({ leaders, box }) => {
	const [currentItem, setCurrentItem] = useState(0);
	const onCurrentChange = current => { setCurrentItem(current.item.leader.id); }

    return (
		<Carousel className="box b1 container" showArrows={false} onNextEnd={onCurrentChange} onPrevEnd={onCurrentChange}>
			{leaders.map((leader, i) => {
				return (
					<Leader key={leader.id} box={box} leader={leader} />
				)
			})}
		</Carousel>
    );
};

export default LeaderMenu;