import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Logo } from '../../../components';
import { Menu } from '../Menu/Menu';

import styles from './Sidebar.module.css';

export const Sidebar = ({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	return (
		<nav className={cn(className, styles.sidebar)}>
			<Logo />
			<Menu />
		</nav>
	);
};