import cn from 'classnames';

import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import ButtonProps from './Button.props';

export const Button = ({ appearance, arrow, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={cn(styles.button, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
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