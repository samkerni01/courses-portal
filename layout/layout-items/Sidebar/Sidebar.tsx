import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { Logo, Search } from '../../../components';
import { Menu } from '../Menu/Menu';

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