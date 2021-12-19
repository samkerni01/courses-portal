import { TextareaHTMLAttributes } from 'react';

import styles from './Textarea.module.css';

export const Textarea = ({ ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element => {
	return (
		<textarea {...props} className={styles.textarea} />
	);
};