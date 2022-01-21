import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

interface SearchProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

function Search({ menu, firstCategory }: SearchProps): JSX.Element {
	return (
		<>
			Search
		</>
	);
}

export default withLayout(Search);