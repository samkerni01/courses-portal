import cn from 'classnames';

import styles from './VacanciesInfo.module.css';
import { HhData } from '../../interfaces/toppage.iterface';
import { Card } from '../Card/Card';
import { StarIcon } from './star.svg';

export const VacanciesInfo = ({ count, juniorSalary, middleSalary, seniorSalary }: HhData): JSX.Element => {
	const icons: JSX.Element[] = new Array(3).fill(<></>);

	const convertNum = (num: number): string => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/, ' ') + ' ₽';
	};

	interface VacancyInfo {
		level: string;
		salary: number;
		rating: number;
	}

	const elements: JSX.Element[] = [
		{ level: 'Начальный', salary: juniorSalary, rating: 1 },
		{ level: 'Средний', salary: middleSalary, rating: 2 },
		{ level: 'Профессионал', salary: seniorSalary, rating: 3 }
	].map(({ level, salary, rating }: VacancyInfo, i: number) => {
		return (
			<div key={i}>
				<div className={styles.title}>{level}</div>
				<div className={styles.salaryValue}>{convertNum(salary)}</div>
				<div className={styles.stars}>
					{icons.map((icon: JSX.Element, n: number) => {
						return <StarIcon key={n} className={cn({
							[styles.filled]: rating >= n + 1
						})} />;
					})}
				</div>
			</div>
		);
	});

	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				{elements}
			</Card>
		</div>
	);
};