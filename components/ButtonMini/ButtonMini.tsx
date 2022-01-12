import cn from 'classnames';

import styles from './ButtonMini.module.css';
import { ButtonMiniProps, icons } from './ButtonMini.props';

export const ButtonMini = ({ appearance, icon, className, ...props }: ButtonMiniProps): JSX.Element => {
	const Icon = icons[icon];

	return (
		<button {...props} className={cn(className, styles.button, styles[appearance])}>
			<Icon />
		</button>
	);
};