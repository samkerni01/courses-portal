import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';

import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/toppage.iterface';

import styles from './Menu.module.css';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpnened
						})}>
							{buildThridLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThridLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<a href={`/${route}/${page.alias}`}
					className={cn(styles.thridLevel, {
						[styles.thridLevelActive]: false
					})}
					key={page._id}
				>
					{page.category}
				</a>
			))
		);
	};

	return (
		<div className={styles.menu}>
			<ul>
				{buildFirstLevel()}
			</ul>
		</div>
	);
};