import cn from 'classnames';

import TagProps from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({ size = 's', children, color = 'ghost', href }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, styles[size], styles[color])}>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	);
};