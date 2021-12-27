import { useContext, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
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
						<Fragment key={category._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(category._id.secondCategory)}>{category._id.secondCategory}</div>
							<motion.div
								layout
								variants={variants}
								initial={category.isOpnened ? 'visible' : 'hidden'}
								animate={category.isOpnened ? 'visible' : 'hidden'}
								className={styles.secondLevelBlock}
							>
								{buildThridLevel(category.pages, menuItem.route)}
							</motion.div>
						</Fragment>
					);
				})}
			</div>
		);
	};

	const buildThridLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(page => (
				<motion.div
					key={page._id}
					variants={variantsChildren}
				>
					<Link href={`/${route}/${page.alias}`}>
						<a
							className={cn(styles.thridLevel, {
								[styles.thridLevelActive]: `/${route}/${page.alias}` == router.asPath
							})}
							onClick={() => {
								menu.map(category => {
									if (category._id.secondCategory != page.alias) {
										category.isOpnened = false;
									}
								});
							}}
						>
							{page.category}
						</a>
					</Link>
				</motion.div>
			))
		);
	};

	return (
		<ul className={styles.list}>
			{buildFirstLevel()}
		</ul>
	);
};