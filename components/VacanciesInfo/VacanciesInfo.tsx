import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import styles from './VacanciesInfo.module.css';
import { Card } from '../Card/Card';
import { StarIcon } from './star.svg';
import { Tag, Title } from '..';
import VacanciesInfoProps from './VacansiesInfo.props';
import { convertNum } from '../../helpers/helpers';

export const VacanciesInfo = ({ count, juniorSalary, middleSalary, seniorSalary, category }: VacanciesInfoProps): JSX.Element => {
	const icons: JSX.Element[] = new Array(3).fill(<></>);

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
					{icons.map((icon, n) => {
						return <StarIcon key={uuidv4()} className={cn({
							[styles.filled]: rating >= n + 1
						})} />;
					})}
				</div>
			</div>
		);
	});

	return (
		<>
			<div className={styles.h2}>
				<Title tag='h2'>Вакансии - {category}</Title>
				<Tag color='red'>hh.ru</Tag>
			</div>

			<div className={styles.hh}>
				<Card className={styles.count}>
					<div className={styles.title}>Всего вакансий</div>
					<div className={styles.countValue}>{count}</div>
				</Card>
				<Card className={styles.salary}>
					{elements}
				</Card>
			</div>
		</>

	);
};