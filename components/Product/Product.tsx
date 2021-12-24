import Image from 'next/image';
import { MouseEvent, useRef, useState } from 'react';
import cn from 'classnames';

import ProductProps from './Product.props';
import styles from './Product.module.css';
import { Card, Title, Tag, Rating, Text, Button, Review, ReviewForm } from '..';
import { convertNum, declOfNum } from '../../helpers/helpers';

export const Product = ({ product }: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const scrollToReview = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<>
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
						{product.categories.map((item, i) => <Tag key={i} className={styles.titleTag}>{item}</Tag>)}
					</div>
				</div>

				<div className={styles.rates}>
					<div className={styles.ratesItem}>
						<div className={styles.price}>
							{convertNum(product.price)}
							{product.oldPrice > 0 && <Tag className={styles.priceTag} color='green'>{convertNum(product.price - product.oldPrice)}</Tag>}
						</div>
						<div className={styles.subtitle}>цена</div>
					</div>

					<div className={styles.ratesItem}>
						<div className={styles.credit}>{convertNum(product.credit)}<span>/мес</span></div>
						<div className={styles.subtitle}>кредит</div>
					</div>

					<div className={styles.ratesItem}>
						<Rating rating={product.reviewAvg ?? product.initialRating} />
						<div className={styles.subtitle}> <a href='#ref' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
					</div>
				</div>

				<div className={styles.descr}>
					<hr className={styles.hr} />
					<Text description='course' >{product.description}</Text>
				</div>

				<div>
					{product.characteristics.map((item, i) => (
						<div key={i} className={styles.feature}>
							<span className={styles.featureTitle}>{item.name}</span>
							<span className={styles.featureDots} />
							<span className={styles.featureValue}>{item.value}</span>
						</div>
					))}
					{product.tags.map((tag, i) => (
						<Tag key={i} className={styles.featureTag}>{tag}</Tag>
					))}
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
					<Button
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>

			<Card
				color='blue'
				className={cn(styles.reviews, {
					[styles.opened]: isReviewOpened,
					[styles.closed]: !isReviewOpened
				})}
				ref={reviewRef}
			>
				{product.reviews.map(review => (
					<div key={review._id}>
						<Review review={review} />
						<hr className={styles.hr} />
					</div>
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</>
	);
};