import styles from './Logo.module.css';
import { LogoIcon } from './logo.svg';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<LogoIcon />

			<div className={styles.text}>
				<span>COURSES</span>
				<br />
				information portal
			</div>
		</div>
	);
};