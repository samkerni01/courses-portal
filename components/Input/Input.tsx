import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Input.module.css';

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
	return (
		<input {...props} className={cn(className, styles.input)} />
	);
};