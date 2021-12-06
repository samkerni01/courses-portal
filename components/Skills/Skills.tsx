import { Title, Tag } from '../';

import styles from './Skills.module.css';

export const Skills = (): JSX.Element => {
	return (
		<div>
			<Title className={styles.title} tag='h1'>Получаемые навыки</Title>
			<div className={styles.tags}>
				<Tag color='primary'>Работа в Photoshop</Tag>
				<Tag color='primary'>Подготовка макетов</Tag>
				<Tag color='primary'>Графический дизайн</Tag>
				<Tag color='primary'>Web дизайн</Tag>
				<Tag color='primary'>Дизайн сайтов</Tag>
			</div>
		</div>
	);
};