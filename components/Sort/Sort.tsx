import cn from 'classnames';

import { SortProps, SortEnum } from './Sort.props';
import styles from './Sort.module.css';
import { LinesIcon } from './lines.svg';

export const Sort = ({ sort, setSort }: SortProps): JSX.Element => {
	return (
		<div className={styles.sort}>
			<button
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<LinesIcon className={styles.icon} />По рейтингу
			</button>
			<button
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<LinesIcon className={styles.icon} />По цене
			</button>
		</div>
	);
};