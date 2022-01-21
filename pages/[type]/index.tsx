import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { API } from '../../helpers/api';

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(category => '/' + category.route),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true };

	const firstCategoryItem = firstLevelMenu.find(category => category.route == params.type);
	if (!firstCategoryItem) return { notFound: true };

	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

function Type({ menu, firstCategory }: TypeProps): JSX.Element {
	return (
		<>
			Type: {firstCategory}
		</>
	);
}

export default withLayout(Type);