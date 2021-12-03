import { ReactNode } from 'react';

export default interface TextProps {
	description: 'course' | 'review' | 'advantages';
	children: ReactNode;
}