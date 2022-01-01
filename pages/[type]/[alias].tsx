import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/toppage.iterface';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';
import { API } from '../../helpers/api';

function TopPage({ page, products, firstCategory }: TopPageProps): JSX.Element {
	return <TopPageComponent
		firstCategory={firstCategory}
		page={page}
		products={products}
	/>;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];

	for (let i = 0; i < firstLevelMenu.length; i++) {
		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstLevelMenu[i].id });
		paths = paths.concat(menu.flatMap(item => item.pages.map(page => `/${firstLevelMenu[i].route}/${page.alias}`)));
	}

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true };

	try {
		const firstCategoryItem = firstLevelMenu.find(category => category.route == params.type);
		if (!firstCategoryItem) return { notFound: true };

		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });
		if (menu.length == 0) return { notFound: true };

		const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);
		const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
			category: page.category,
			limit: 10
		});

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products
			}
		};
	} catch { return { notFound: true }; }
};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}