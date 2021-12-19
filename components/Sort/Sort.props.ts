import { HTMLAttributes } from 'react';

export interface SortProps extends HTMLAttributes<HTMLDivElement> {
	sort: SortEnum
	setSort: (sort: SortEnum) => void
}

export enum SortEnum {
	Rating,
	Price
}