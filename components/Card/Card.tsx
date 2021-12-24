import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import CardProps from './Card.props';
import styles from './Card.module.css';

export const Card = forwardRef(({ color = 'white', children, className }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div ref={ref} className={cn(className, styles.card, {
			[styles.blue]: color == 'blue'
		})}>
			{children}
		</div>
	);
});