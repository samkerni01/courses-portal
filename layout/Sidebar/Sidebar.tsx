import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Menu } from '../Menu/Menu';
import { Logo } from '../logo.svg';
import styles from './Sidebar.module.css';
import { Search } from '../../components';

export const Sidebar = ({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)}>
			<div className={styles.logo}>
				<Logo />
				<span>OWL</span>
				top
			</div>
			<Search />

			<Menu />
		</div>
	);
};