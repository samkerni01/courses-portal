import { useReducer } from 'react';

import TopPageComponentProps from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

import { Tag, Title, VacanciesInfo, Advantages, Skills, Sort, Product } from '../../components';
import { TopLevelCategory } from '../../interfaces/toppage.iterface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { SortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ sort, products: sortedProducts }, dispathSort] = useReducer(SortReducer, { products, sort: SortEnum.Rating });

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div>
			<div className={styles.title}>
				<Title tag='h1'>{page.title}</Title>
				{products && <Tag color='grey'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>

			<div>
				{sortedProducts && sortedProducts.map(product => (<Product key={product._id} product={product} />))}
			</div>

			{firstCategory == TopLevelCategory.Courses && page.hh && <VacanciesInfo {...page.hh} category={page.category} />}

			{
				page.advantages
				&&
				page.advantages.length > 0
				&&
				(page.advantages[0].title && page.advantages[0].description)
				&&
				<Advantages advantages={page.advantages} seoText={page.seoText} />
			}

			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

			<Skills tags={page.tags} />
		</div >
	);
};