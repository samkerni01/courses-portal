import cn from 'classnames';
import { motion } from 'framer-motion';

import { ArrowIcon } from './arrow.svg';
import styles from './Button.module.css';
import ButtonProps from './Button.props';

export const Button = ({ appearance, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<motion.button
			{...props}
			className={cn(className, styles.button, styles[appearance])}
			whileHover={{ scale: 1.05 }}
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
		</motion.button>
	);
};