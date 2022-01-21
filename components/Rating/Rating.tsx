import { useState, KeyboardEvent, forwardRef, ForwardedRef, useRef, useEffect } from 'react';
import cn from 'classnames';

import RatingProps from './Rating.props';
import styles from './Rating.module.css';
import { StarIcon } from './star.svg';

export const Rating = forwardRef(({ rating = 0, isEditable, setRatingOfForm, error, tabIndex }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [aciveRating, setAciveRating] = useState<number>(rating);
	const [ratingValue, setRatingValue] = useState<number>(rating);
	const starsArray: JSX.Element[] = new Array(5).fill(<></>);
	const ratingArrayRef = useRef<(SVGElement | null)[]>([]);

	useEffect(() => {
		setAciveRating(rating);
		setRatingValue(rating);
	}, [rating]);

	const setValueKey = (key: KeyboardEvent) => {
		let rating: number = aciveRating;

		if (key.code == 'ArrowRight' || key.code == 'ArrowUp') {
			key.preventDefault();

			rating = aciveRating < 5 ? aciveRating + 1 : 5;
		}

		if (key.code == 'ArrowLeft' || key.code == 'ArrowDown') {
			key.preventDefault();

			rating = aciveRating > 1 ? aciveRating - 1 : 1;
		}

		setAciveRating(rating);
		setRatingValue(rating);
		setRatingOfForm && setRatingOfForm(rating);

		ratingArrayRef.current[rating - 1]?.focus();
	};

	const computeFocus = (r: number, i: number): number => {
		if ((!aciveRating && i == 0) || (r == i + 1)) return tabIndex ?? 0;
		return -1;
	};

	const elements: JSX.Element[] = starsArray.map((item: JSX.Element, i: number) => {
		if (!isEditable) {
			return (
				<span
					key={i}
					className={cn(styles.star, styles.outline, {
						[styles.filled]: i < aciveRating
					})}
				>
					<StarIcon />
				</span>
			);
		}

		return (
			<span
				key={i}
				className={cn(styles.star, styles.pointer, {
					[styles.filled]: i < aciveRating
				})}
				onMouseEnter={() => setAciveRating(i + 1)}
				onMouseLeave={() => setAciveRating(ratingValue)}
				onClick={() => {
					setRatingValue(i + 1);
					setRatingOfForm && setRatingOfForm(i + 1);
				}}
			>
				<StarIcon
					tabIndex={computeFocus(ratingValue, i)}
					ref={r => ratingArrayRef.current?.push(r)}
					onKeyDown={setValueKey}
					onFocus={() => setAciveRating(i + 1)}
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
			{error && <span className={styles['error-message']}>{error.message}</span>}
		</div>
	);
});