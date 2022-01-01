import { HTMLAttributes } from 'react';

export const LinesIcon = ({ className }: HTMLAttributes<SVGElement>): JSX.Element => {
	return (
		<svg className={className} width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="20" height="3" rx="1.5" fill="#7653FC" />
			<rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
			<rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
		</svg>
	);
};
