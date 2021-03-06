import { useContext, Fragment, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { AppContext } from '../../../context/app.context';
import { firstLevelMenu } from '../../../helpers/helpers';
import { FirstLevelMenuItem, PageItem } from '../../../interfaces/menu.interface';

import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			paddingTop: 10,
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			paddingTop: 0,
			marginBottom: 0
		}
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto',
			marginBottom: 10
		},
		hidden: {
			opacity: 0,
			height: 0,
			marginBottom: 0
		}
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(category => (
					<li key={category.route}>
						<Link href={`/${category.route}`}>
							<a>
								<div className={cn(styles['first-level'], {
									[styles['first-level-active']]: category.id == firstCategory
								})}>
									{category.icon}
									<span>{category.name}</span>
								</div>
							</a>
						</Link>
						{category.id == firstCategory && buildSecondLevel(category)}
					</li>
				))}
			</>
		);
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(category => {
			if (category._id.secondCategory == secondCategory) {
				category.isOpnened = !category.isOpnened;
			} else {
				category.isOpnened = false;
			}

			return category;
		}));
	};

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code == 'Enter' || key.code == 'Space') {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles['second-block']}>
				{menu.map(category => {
					if (category.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						category.isOpnened = true;
					}

					return (
						<Fragment key={category._id.secondCategory}>
							<li
								tabIndex={0}
								className={styles['second-level']}
								onClick={() => openSecondLevel(category._id.secondCategory)}
								onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, category._id.secondCategory)}
							>
								{category._id.secondCategory}
								<motion.ul
									layout
									variants={variants}
									initial={category.isOpnened ? 'visible' : 'hidden'}
									animate={category.isOpnened ? 'visible' : 'hidden'}
									className={styles['second-level-block']}
								>
									{buildThridLevel(category.pages, menuItem.route, category.isOpnened ?? false)}
								</motion.ul>
							</li>
						</Fragment>
					);
				})}
			</ul>
		);
	};

	const buildThridLevel = (pages: PageItem[], route: string, isOpnened: boolean) => {
		return (
			pages.map(page => (
				<motion.li
					key={page._id}
					variants={variantsChildren}
				>
					<Link href={`/${route}/${page.alias}`}>
						<a
							className={cn(styles['thrid-level'], {
								[styles['thrid-level-active']]: `/${route}/${page.alias}` == router.asPath
							})}
							onClick={() => {
								menu.map(category => {
									if (category._id.secondCategory != page.alias) {
										category.isOpnened = false;
									}
								});
							}}
							tabIndex={isOpnened ? 0 : -1}
						>
							{page.category}
						</a>
					</Link>
				</motion.li>
			))
		);
	};


	return (
		<ul className={styles.list}>
			{buildFirstLevel()}
		</ul>
	);
};