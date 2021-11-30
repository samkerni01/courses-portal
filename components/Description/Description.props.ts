import { ReactNode } from 'react';

export interface DescriptionProps {
	description: 'course' | 'review' | 'advantages';
	children: ReactNode;
}