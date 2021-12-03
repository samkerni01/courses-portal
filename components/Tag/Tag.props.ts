import { ReactNode } from 'react';

export default interface TagProps {
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
	children: ReactNode;
}