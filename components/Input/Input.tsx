import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import styles from './Input.module.css';
import InputProps from './Input.props';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.wrapper)}>
			<input
				{...props}
				className={cn(styles.input, {
					[styles.error]: error
				})}
				ref={ref}
			/>
			{error && <span className={styles['error-message']}>{error.message}</span>}
		</div>
	);
});