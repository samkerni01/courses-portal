import { ForwardedRef, forwardRef, MouseEvent, useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { convertNum } from '../../helpers/helpers';
import { Card, Title, Tag, Rating, Text, Button, Review, ReviewForm } from '..';

import ProductProps from './Product.props';
import styles from './Product.module.css';

export const Product = motion(forwardRef(({ product }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const scrollToReview = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		setIsReviewOpened(true);
		reviewRef.current?.focus();
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const variants = {
		visible: {
			height: 'auto',
			opacity: 1,
		},
		hidden: {
			height: 0,
			overflow: 'hidden',
			opacity: 0
		}
	};

	const declOfNum = (num: number, titles: string[]): string => {
		const cases = [2, 0, 1, 1, 1, 2];
		return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
	};

	return (
		<div ref={ref}>
			<Card className={styles.wrapper} >
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
						{product.categories.map((item, i) => <Tag key={i} className={styles['title-tag']}>{item}</Tag>)}
					</div>
				</div>

				<div className={styles.rates}>
					<div className={styles.rate}>
						<div className={styles.price}>
							{convertNum(product.price)}
							{product.oldPrice > 0 && <Tag className={styles['price-tag']} color='green'>{convertNum(product.price - product.oldPrice)}</Tag>}
						</div>
						<div className={styles.subtitle}>цена</div>
					</div>

					<div className={styles.rate}>
						<div className={styles.credit}>{convertNum(product.credit)}<span>/мес</span></div>
						<div className={styles.subtitle}>кредит</div>
					</div>

					<div className={styles.rate}>
						<Rating rating={product.reviewAvg ?? product.initialRating} />
						<div className={styles.subtitle}>
							<a href='#ref' onClick={scrollToReview}>
								{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</a>
						</div>
					</div>
				</div>

				<div className={styles.descr}>
					<hr className={styles.hr} />
					<Text description='course' >{product.description}</Text>
				</div>

				<div>
					{product.characteristics.map((item, i) => (
						<div key={i} className={styles.feature}>
							<span className={styles['feature-title']}>{item.name}</span>
							<span className={styles['feature-dots']} />
							<span className={styles['feature-value']}>{item.value}</span>
						</div>
					))}
					{product.tags.map((tag, i) => (
						<Tag key={i} className={styles['feature-tag']}>{tag}</Tag>
					))}
				</div>

				<div>
					{product.advantages &&
						<div className={styles.advantages}>
							<div className={styles['adv-title']}>Преимущества</div>
							<p className={styles['adv-descr']}>{product.advantages}</p>
						</div>
					}
					{product.disadvantages &&
						<div className={styles.disadvantages}>
							<div className={styles['adv-title']}>Недостатки</div>
							<p className={styles['adv-descr']}>{product.disadvantages}</p>
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

			<motion.div
				variants={variants}
				initial={isReviewOpened ? 'visible' : 'hidden'}
				animate={isReviewOpened ? 'visible' : 'hidden'}
			>
				<Card
					color='blue'
					ref={reviewRef}
					className={styles.reviews}
					tabIndex={isReviewOpened ? 0 : -1}
				>
					{product.reviews.map(review => (
						<Fragment key={review._id}>
							<Review review={review} />
							<hr className={styles.hr} />
						</Fragment>
					))}
					<ReviewForm productId={product._id} isOpened={isReviewOpened} />
				</Card>
			</motion.div>
		</div>
	);
}));