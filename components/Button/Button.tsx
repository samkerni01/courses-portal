import cn from 'classnames';

import { ArrowIcon } from './arrow.svg';
import styles from './Button.module.css';
import ButtonProps from './Button.props';

export const Button = ({ appearance, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={cn(className, styles.button, styles[appearance])}
		>
			{children}
			{arrow &&
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down'
					})}
				>
					<ArrowIcon />
				</span>
			}
		</button>
	);
};