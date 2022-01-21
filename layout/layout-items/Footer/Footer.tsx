import { HTMLAttributes } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';

import styles from './Footer.module.css';

export const Footer = ({ className }: HTMLAttributes<HTMLElement>): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)}>
			<div>Courses information portal © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href='#' target='_blank'>Пользовательское соглашение</a>
			<a href='#' target='_blank'>Политика конфиденциальности</a>
		</footer>
	);
};