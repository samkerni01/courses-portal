import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(category => {
			if (category._id.secondCategory == secondCategory) {
				category.isOpnened = !category.isOpnened;
			}

			return category;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(category => (
					<div key={category.route}>
						<Link href={`/${category.route}`}>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: category.id == firstCategory
								})}>
									{category.icon}
									<span>{category.name}</span>
								</div>
							</a>
						</Link>
						{category.id == firstCategory && buildSecondLevel(category)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(category => {
					if (category.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						category.isOpnened = true;
					}

					return (
						<div key={category._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(category._id.secondCategory)}>{category._id.secondCategory}</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: category.isOpnened
							})}>
								{buildThridLevel(category.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThridLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<Link href={`/${route}/${page.alias}`} key={page._id}>
					<a className={cn(styles.thridLevel, {
						[styles.thridLevelActive]: `/${route}/${page.alias}` == router.asPath
					})}>
						{page.category}
					</a>
				</Link>
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