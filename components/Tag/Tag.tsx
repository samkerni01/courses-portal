import cn from 'classnames';

import TagProps from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({ children, color = 'ghost', href, className }: TagProps): JSX.Element => {
	return (
		<div className={cn(className, styles.tag, styles[color])}>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	);
};