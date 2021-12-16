import { Title, Tag } from '../';

import styles from './Skills.module.css';
import SkillsProps from './Skills.props';

export const Skills = ({ tags }: SkillsProps): JSX.Element => {
	return (
		<div>
			<Title className={styles.title} tag='h2'>Получаемые навыки</Title>
			<div className={styles.tags}>
				{tags.map(tag => (
					<Tag color='primary' className={styles.tag}>{tag}</Tag>
				))}
			</div>
		</div>
	);
};