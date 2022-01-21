import { ProductModel } from '../../../interfaces/product.interface';
import { TopLevelCategory, ContentModel } from '../../../interfaces/content.iterface';

export default interface ContentProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory;
	page: ContentModel;
	products: ProductModel[];
}