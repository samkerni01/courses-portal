import cn from 'classnames';

import { SortProps, SortEnum } from './Sort.props';
import styles from './Sort.module.css';

export const Sort = ({ sort, setSort }: SortProps): JSX.Element => {
	return (
		<div className={styles.sort}>
			<span
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<div className={styles.icon}>
					<span />
					<span />
					<span />
				</div>По рейтингу
			</span>
			<span
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<div className={styles.icon}>
					<span />
					<span />
					<span />
				</div>По цене
			</span>
		</div>
	);
};