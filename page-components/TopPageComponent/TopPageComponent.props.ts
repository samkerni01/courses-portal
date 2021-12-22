import { ProductModel } from '../../interfaces/product.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/toppage.iterface';

export default interface TopPageComponentProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}