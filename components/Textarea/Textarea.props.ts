import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export default interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: FieldError;
}