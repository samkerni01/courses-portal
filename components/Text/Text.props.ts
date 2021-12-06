import { HTMLAttributes, ReactNode } from 'react';

export default interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	description: 'course' | 'review' | 'advantages';
	children: ReactNode;
}