import { HTMLAttributes } from 'react';

import { ProductModel } from '../../interfaces/product.interface';

export default interface ProductProps extends HTMLAttributes<HTMLDivElement> {
	product: ProductModel
}