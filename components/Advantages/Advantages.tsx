import { Title, Text } from '../';

import styles from './Advantages.module.css';

export const Advantages = (): JSX.Element => {
	return (
		<div className={styles.advantages}>
			<Title tag='h1'>Преимущества</Title>
			<div>
				<Title className={styles.title} tag='h2'>Мобильность специалиста</Title>
				<Text className={styles.text} description='advantages'>
					Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
				</Text>
			</div>

			<div>
				<Title className={styles.title} tag='h2'>Мобильность специалиста</Title>
				<Text className={styles.text} description='advantages'>
					Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
				</Text>
			</div>

			<div>
				<Title className={styles.title} tag='h2'>Мобильность специалиста</Title>
				<Text className={styles.text} description='advantages'>
					Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
				</Text>
			</div>

			<div>
				<Title className={styles.title} tag='h2'>Мобильность специалиста</Title>
				<Text className={styles.text} description='advantages'>
					Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
				</Text>
			</div>

			<Text className={styles.end} description='advantages'>
				При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.
			</Text>
		</div>
	);
};