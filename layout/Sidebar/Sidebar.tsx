import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Menu } from '../Menu/Menu';
import { Logo, Search } from '../../components';

import styles from './Sidebar.module.css';

export const Sidebar = ({ className }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)}>
			<Logo />
			<Search />
			<Menu />
		</div>
	);
};