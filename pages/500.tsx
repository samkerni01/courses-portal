import Error from 'next/error';

import { withLayout } from '../layout/Layout';

const Error500 = (): JSX.Element => <Error statusCode={500} />;

export default withLayout(Error500);