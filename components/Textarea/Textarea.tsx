import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import styles from './Textarea.module.css';
import TextAreaProps from './Textarea.props';

export const Textarea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.wrapper)}>
			<textarea
				{...props}
				className={cn(styles.textarea, {
					[styles.error]: error
				})}
				ref={ref}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});