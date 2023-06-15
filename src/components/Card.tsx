import '../styles/Card.css';
import data from '../../data.json';
import { useState } from 'react';

type DataType = {
	category: string;
	score: number;
	icon: string;
};

function Card() {
	const [scores, setScores] = useState<DataType[]>(data);

	function calculateAverage() {
		let sum = 0;
		for (let score of scores) {
			sum += score.score;
		}
		return sum / scores.length;
	}
	let averageScore = calculateAverage();

	return (
		<div className='Card'>
			<CardLeft averageScore={averageScore} />
			<CardRight />
		</div>
	);
}

function CardLeft(props: { averageScore: number }) {
	return (
		<div className='CardLeft'>
			<h3>Your Result</h3>
			<div className='score-circle'>
				<p className='left-score-average'>{Math.floor(props.averageScore)}</p>
				<p className='left-score-total'>of 100</p>
			</div>
			<p className='left-message'>Great</p>
			<p className='left-explanation'>You scored higher than 65% of the people who have taken these tests.</p>
		</div>
	);
}

function CardRight() {
	return (
		<div className='CardRight'>
			<h3>Summary</h3>
		</div>
	);
}

export default Card;
