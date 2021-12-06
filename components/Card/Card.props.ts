import { HTMLAttributes, ReactNode } from 'react';

export default interface CardProps extends HTMLAttributes<HTMLDivElement> {
	color?: 'white' | 'blue';
	children: ReactNode;
}