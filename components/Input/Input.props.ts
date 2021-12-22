import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
}