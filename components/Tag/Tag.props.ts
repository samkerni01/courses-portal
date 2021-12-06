import { ReactNode } from 'react';

export default interface TagProps {
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
	children: ReactNode;
}