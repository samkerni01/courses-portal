import { HTMLAttributes } from 'react';

export const Header = ({ ...props }: HTMLAttributes<HTMLElement>): JSX.Element => {
	return <header {...props}>Header</header>;
};