import { HTMLAttributes, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { Logo, ButtonMini } from '../../../components';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './Header.module.css';

export const Header = ({ ...props }: HTMLAttributes<HTMLElement>): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};

	return (
		<header {...props} className={styles.header}>
			<Logo />
			<ButtonMini appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
			<motion.div
				className={styles.menu}
				variants={variants}
				initial='closed'
				animate={isOpened ? 'opened' : 'close'}
			>
				<ButtonMini appearance='white' icon='close' className={styles.close} onClick={() => setIsOpened(false)} />
				<Sidebar />
			</motion.div>
		</header>
	);
};