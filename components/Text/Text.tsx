import cn from 'classnames';

import { TextProps } from './Text.props';
import styles from './Text.module.css';

export const Text = ({ description, children }: TextProps): JSX.Element => {
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