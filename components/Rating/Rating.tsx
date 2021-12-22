import { useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import cn from 'classnames';

import RatingProps from './Rating.props';
import styles from './Rating.module.css';
import { StarIcon } from './star.svg';

export const Rating = forwardRef(({ rating = 0, isEditable, setRatingOfForm, error }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [ratingState, setRatingState] = useState<number>(rating);
	const [lastRating, setLastRating] = useState<number>(rating);
	const starsArray: JSX.Element[] = new Array(5).fill(<></>);

	const elements: JSX.Element[] = starsArray.map((item: JSX.Element, i: number) => {
		return (
			<span
				key={i}
				className={cn(styles.star, {
					[styles.filled]: i < ratingState,
					[styles.pointer]: isEditable,
					[styles.outline]: !isEditable
				})}
				onMouseEnter={() => isEditable && setRatingState(i + 1)}
				onMouseLeave={() => isEditable && setRatingState(lastRating)}
				onClick={() => {
					isEditable && setLastRating(i + 1);
					setRatingOfForm && setRatingOfForm(i + 1);
				}}
			>
				<StarIcon
					tabIndex={isEditable ? 0 : -1}
					onKeyPress={(e: KeyboardEvent<SVGElement>) => {
						if (e.key == 'Enter') {
							setRatingState(i + 1);
							setLastRating(i + 1);
							setRatingOfForm && setRatingOfForm(i + 1);
						}
					}}
				/>
			</span>
		);
	});

	return (
		<div ref={ref} className={cn(styles.wrapper, {
			[styles.error]: error
		})}
		>
			{elements}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});