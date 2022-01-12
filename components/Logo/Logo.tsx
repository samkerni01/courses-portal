import styles from './Logo.module.css';
import { LogoIcon } from './logo.svg';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<LogoIcon />
			<span>OWL</span>
			top
		</div>
	);
};