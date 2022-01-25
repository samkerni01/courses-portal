import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './Up.module.css';

import { ButtonMini } from '../ButtonMini/ButtonMini';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const isBrowser = typeof window !== 'undefined';

	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	});

	useEffect(() => {
		controls.start({ display: 'inline-block', opacity: scrollY / document.body.scrollHeight });
	}, [scrollY, controls]);

	const handleScroll = () => {
		const currentScrollY = isBrowser ? window.scrollY : 0;
		setScrollY(currentScrollY);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonMini appearance='primary' icon='up' aria-label='Наверх' onClick={scrollToTop} />
		</ motion.div>
	);
};