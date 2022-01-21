import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    return (
        <>
            Home
        </>
    );
}

export default withLayout(Home);