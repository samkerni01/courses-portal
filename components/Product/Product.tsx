import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

import ProductProps from './Product.props';
import styles from './Product.module.css';
import { Card, Title, Tag, Rating, Text, Button } from '..';
import { convertNum, declOfNum } from '../../helpers/helpers';

export const Product = ({ product }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.title}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					className={styles.logo}
					alt='logo'
					width={70}
					height={70}
				/>
				<div>
					<Title tag='h3'>{product.title}</Title>
					{product.categories.map(item => <Tag key={uuidv4()} className={styles.titleTag}>{item}</Tag>)}
				</div>
			</div>

			<div className={styles.rates}>
				<div className={styles.ratesItem}>
					<div className={styles.price}>
						{convertNum(product.price)}
						{product.oldPrice && <Tag className={styles.priceTag} color='green'>{convertNum(product.price - product.oldPrice)}</Tag>}
					</div>
					<div className={styles.subtitle}>цена</div>
				</div>

				<div className={styles.ratesItem}>
					<div className={styles.credit}>{convertNum(product.credit)}<span>/мес</span></div>
					<div className={styles.subtitle}>кредит</div>
				</div>

				<div className={styles.ratesItem}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
					<div className={styles.subtitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
				</div>
			</div>

			<div className={styles.descr}>
				<hr className={styles.hr} />
				<Text description='course' >{product.description}</Text>
			</div>

			<div>
				{product.characteristics.map(item => (
					<div key={uuidv4()} className={styles.feature}>
						<span className={styles.featureTitle}>{item.name}</span>
						<span className={styles.featureDots} />
						<span className={styles.featureValue}>{item.value}</span>
					</div>
				))}
				<Tag className={styles.featureTag}>tag</Tag>
			</div>

			<div>
				{product.advantages &&
					<div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<p className={styles.advDescr}>{product.advantages}</p>
					</div>
				}
				{product.disadvantages &&
					<div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<p className={styles.advDescr}>{product.disadvantages}</p>
					</div>
				}
			</div>

			<div className={styles.buttons}>
				<hr className={styles.hr} />
				<Button appearance='primary' className={styles.button}>Узнать подробнее</Button>
				<Button appearance='ghost' arrow='right'>Читать отзывы</Button>
			</div>
		</Card>
	);
};