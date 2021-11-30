import cn from 'classnames';

import { DescriptionProps } from './Description.props';
import styles from './Description.module.css';

export const Description = ({ description, children }: DescriptionProps): JSX.Element => {
	return (
		<p
			className={cn(styles.description, {
				[styles.course]: description == 'course',
				[styles.review]: description == 'review',
				[styles.advantages]: description == 'advantages'
			})}
		>
			{children}
		</p >
	);
};