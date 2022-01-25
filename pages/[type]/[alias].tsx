import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout/Layout';
import { Content } from '../../layout/layout-items';

import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, ContentModel } from '../../interfaces/content.iterface';
import { ProductModel } from '../../interfaces/product.interface';

import { firstLevelMenu } from '../../helpers/helpers';
import { API } from '../../helpers/api';

import { Error404 } from '../404';

function Page({ page, products, firstCategory }: ContentProps): JSX.Element {
	if (!page || !products) return <Error404 />;

	return (
		<>
			<Head>
				<title>{page.metaTitle}</title>
				<meta name="description" content={page.metaDescription} />
				<meta property="og:title" content={page.metaTitle} />
				<meta property="og:description" content={page.metaDescription} />
				<meta property="og:type" content="article" />

			</Head>
			<Content
				firstCategory={firstCategory}
				page={page}
				products={products}
			/>
		</>
	);
}

export default withLayout(Page);

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

export const getStaticProps: GetStaticProps<ContentProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true };

	const firstCategoryItem = firstLevelMenu.find(category => category.route == params.type);
	if (!firstCategoryItem) return { notFound: true };

	try {
		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });
		if (menu.length == 0) return { notFound: true };

		const { data: page } = await axios.get<ContentModel>(API.topPage.byAlias + params.alias);

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

interface ContentProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: ContentModel;
	products: ProductModel[];
}