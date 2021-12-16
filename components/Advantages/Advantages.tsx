import { Title, Text } from '../';

import styles from './Advantages.module.css';
import AdvantagesProps from './Advantages.props';
import { CheckIcon } from './check.svg';

export const Advantages = ({ advantages, seoText }: AdvantagesProps): JSX.Element => {
	return (
		<div className={styles.advantages}>
			<Title className={styles.h2} tag='h2'>Преимущества</Title>

			{advantages.map(data => (
				<div className={styles.wrapper} key={data._id}>
					<CheckIcon />
					<Title className={styles.title} tag='h3'>{data.title}</Title>
					<hr className={styles.line} />
					<Text className={styles.text} description='advantages'>
						{data.description}
					</Text>
				</div>
			))}

			{seoText && <Text className={styles.seoText} description='advantages'>{seoText}</Text>}
		</div>
	);
};