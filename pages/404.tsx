import Error from 'next/error';

import { withLayout } from '../layout/Layout';

export const Error404 = (): JSX.Element => <Error statusCode={404} />;

export default withLayout(Error404);