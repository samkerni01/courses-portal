import { Tag, Title, VacanciesInfo, Advantages, Skills } from '../../components';
import TopPageComponentProps from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/toppage.iterface';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div>
			<div className={styles.title}>
				<Title tag='h1'>{page.title}</Title>
				{products && <Tag color='grey'>{products.length}</Tag>}
				<span>Сорт</span>
			</div>

			<div>
				{products && products.map(product => (<div key={product._id}>{product.title}</div>))}
			</div>

			{firstCategory == TopLevelCategory.Courses && page.hh && <VacanciesInfo {...page.hh} category={page.category} />}

			{page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} seoText={page.seoText} />}

			<Skills tags={page.tags} />
		</div >
	);
};