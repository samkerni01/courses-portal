import { HTMLAttributes, ReactNode } from 'react';

export default interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down';
	children: ReactNode;
}