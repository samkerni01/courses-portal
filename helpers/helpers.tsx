import { TopLevelCategory } from '../interfaces/content.iterface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

import { CoursesIcon } from './icons/courses.svg';
import { ServicesIcon } from './icons/services.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services }
];

export const convertNum = (num: number): string => {
	return String(num).replace(/\B(?=(\d{3})+(?!\d))/, ' ') + ' ₽';
};