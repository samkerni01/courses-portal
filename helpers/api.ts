const _apiBase = process.env.NEXT_PUBLIC_DOMAIN + '/api';

export const API = {
	topPage: {
		find: _apiBase + '/top-page/find',
		byAlias: _apiBase + '/top-page/byAlias/'
	},
	product: {
		find: _apiBase + '/product/find'
	},
	review: {
		createDemo: _apiBase + '/review/create-demo'
	}
};