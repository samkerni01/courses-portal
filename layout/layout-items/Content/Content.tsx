import { useState } from 'react';

import { Tag, Title, VacanciesInfo, Advantages, Skills, Sort, Product } from '../../../components';
import { SortEnum } from '../../../components/Sort/Sort.props';
import { TopLevelCategory } from '../../../interfaces/content.iterface';

import ContentProps from './Content.props';
import styles from './Content.module.css';

export const Content = ({ page, products, firstCategory }: ContentProps): JSX.Element => {
	const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

	const sortProducts = () => {
		if (sort == SortEnum.Rating) {
			return products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1);
		}

		return products.sort((a, b) => a.price > b.price ? 1 : -1);
	};

	const sortedProducts = sortProducts();

	return (
		<>
			<div className={styles.title}>
				<Title tag='h1'>{page.title}</Title>
				{products && <Tag color='grey'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>

			{sortedProducts && sortedProducts.map(product => (<Product layout key={product._id} product={product} />))}

			{firstCategory == TopLevelCategory.Courses && page.hh && <VacanciesInfo {...page.hh} category={page.category} />}

			{
				page.advantages
				&&
				page.advantages.length > 0
				&&
				(page.advantages[0].title && page.advantages[0].description)
				&&
				<Advantages advantages={page.advantages} />
			}

			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

			<Skills tags={page.tags} />
		</ >
	);
};