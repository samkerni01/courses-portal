import { HTMLAttributes, ReactNode } from 'react';

export default interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down';
	children: ReactNode;
}