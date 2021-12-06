import cn from 'classnames';

import CardProps from './Card.props';
import styles from './Card.module.css';

export const Card = ({ color = 'white', children, className }: CardProps): JSX.Element => {
	return (
		<div className={cn(className, styles.card, {
			[styles.blue]: color == 'blue'
		})}>
			{children}
		</div>
	);
};