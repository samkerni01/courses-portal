import cn from 'classnames';

import { Card } from '..';

import styles from './Skeleton.module.css';

export const Skeleton = () => {
	return (
		<Card>
			<div className={styles.skeleton}>
				<div className={styles.header}>
					<div className={styles.details}>
						<div className={styles.img} />
						<div>
							<span className={styles.title} />
							<span className={styles.tag} />
						</div>
					</div>
					<div className={styles.rate}>
						<span className={styles.title} />
						<span className={styles.title} />
						<span className={styles.title} />
					</div>
				</div>
				<div className={styles.description}>
					<div className={cn(styles.line, styles['line-1'])} />
					<div className={styles.line} />
					<div className={cn(styles.line, styles['line-3'])} />
				</div>
				<div className={styles.btns}>
					<div className={styles.btn} />
					<div className={cn(styles.btn, styles['btn-2'])} />
				</div>
			</div>
		</Card>
	);
};