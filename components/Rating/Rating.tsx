import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import RatingProps from './Rating.props';
import styles from './Rating.module.css';
import { StarIcon } from './star.svg';

export const Rating = ({ rating = 0, mutable }: RatingProps): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(rating);
	const [lastRating, setLastRating] = useState<number>(rating);
	const starsArray: JSX.Element[] = new Array(5).fill(<></>);

	const elements: JSX.Element[] = starsArray.map((item: JSX.Element, i: number) => {
		return (
			<span
				key={i}
				className={cn(styles.star, {
					[styles.filled]: i < ratingState,
					[styles.pointer]: mutable
				})}
				onMouseEnter={() => mutable && setRatingState(i + 1)}
				onMouseLeave={() => mutable && setRatingState(lastRating)}
				onClick={() => mutable && setLastRating(i + 1)}
			>
				<StarIcon
					tabIndex={mutable ? 0 : -1}
					onKeyPress={(e: KeyboardEvent<SVGElement>) => {
						if (e.key == 'Enter') {
							setRatingState(i + 1);
							setLastRating(i + 1);
						}
					}}
				/>
			</span>
		);
	});

	return (
		<div>
			{elements}
		</div>
	);
};