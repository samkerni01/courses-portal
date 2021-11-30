import { ReactNode } from 'react';

export interface TagProps {
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
	children: ReactNode;
}