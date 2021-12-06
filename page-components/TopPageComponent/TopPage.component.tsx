import { Tag, Title, VacanciesInfo, Advantages, Skills } from '../../components';
import TopPageComponentProps from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/toppage.iterface';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Title tag='h1'>{page.title}</Title>
				{products && <Tag color='grey'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>

			<div>
				{products && products.map(product => (<div key={product._id}>{product.title}</div>))}
			</div>

			<div className={styles.hhTitle}>
				<Title tag='h2'>Вакансии - {page.category}</Title>
				<Tag color='red'>hh.ru</Tag>
			</div>

			{firstCategory == TopLevelCategory.Courses && <VacanciesInfo {...page.hh} />}

			<Advantages />

			<Skills />
		</div >
	);
};