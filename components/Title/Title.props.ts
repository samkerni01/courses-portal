import { HTMLAttributes, ReactNode } from 'react';

export default interface TitleProps extends HTMLAttributes<HTMLElement> {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}