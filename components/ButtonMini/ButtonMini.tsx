import cn from 'classnames';

import styles from './ButtonMini.module.css';
import { ButtonMiniProps, icons } from './ButtonMini.props';

export const ButtonMini = ({ appearance, icon, ...props }: ButtonMiniProps): JSX.Element => {
	const Icon = icons[icon];

	return (
		<button {...props} className={cn(styles.button, styles[appearance])}>
			<Icon />
		</button>
	);
};