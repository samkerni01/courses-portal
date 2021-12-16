import { HTMLAttributes, ReactNode } from 'react';

export default interface TagProps extends HTMLAttributes<HTMLElement> {
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
	children: ReactNode;
}