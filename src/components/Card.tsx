import '../styles/Card.css';
import data from '../../data.json';
import { useState } from 'react';

type DataType = {
	category: string;
	score: number;
	icon: string;
	color: string;
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
			<CardRight scores={scores} />
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

function CardRight(props: { scores: DataType[] }) {
	return (
		<div className='CardRight'>
			<h3>Summary</h3>
			<ScoreList scores={props.scores} />
		</div>
	);
}

function ScoreList({ scores }: { scores: DataType[] }) {
	return (
		<div className='ScoreList'>
			{scores.map((score) => {
				return (
					<ScoreListItem
						category={score.category}
						score={score.score}
						icon={score.icon}
						color={score.color}
					/>
				);
			})}
			<button>Continue</button>
		</div>
	);
}

function ScoreListItem({ category, score, icon, color }: DataType) {
	console.log(color);
	return (
		<div className={'ScoreListItem ' + color}>
			<div className='flex-item-container'>
				<img src={icon} alt={`${category} icon`} />
				<p className='category'>{category}</p>
			</div>

			<p className='score'>
				{score} <span>/ 100</span>
			</p>
		</div>
	);
}

export default Card;
