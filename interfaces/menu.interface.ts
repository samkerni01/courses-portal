import { TopLevelCategory } from './toppage.iterface';

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpnened?: boolean;
	pages: PageItem[];
}

export interface firstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory
}