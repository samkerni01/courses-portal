import { ReactNode } from 'react';

export interface TextProps {
	description: 'course' | 'review' | 'advantages';
	children: ReactNode;
}