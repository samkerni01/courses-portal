import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

import { Button, Input, Rating, Textarea } from '..';
import { API } from '../../helpers/api';

import styles from './ReviewForm.module.css';
import { ReviewFormProps, IReviewForm, IReviewSentResponse } from './ReviewForm.props';
import { CloseIcon } from './close.svg';

export const ReviewForm = ({ productId, isOpened }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });

			if (data.message) {
				setIsSuccess(true);
				reset({
					name: '',
					title: '',
					description: ''
				});
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError((e as Error).message);
		}
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					placeholder='Имя'
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
				/>
				<Input
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
				/>

				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Поставьте оценку' } }}
						render={({ field: { value, onChange, ref } }) => (
							<Rating
								isEditable
								rating={value}
								setRatingOfForm={onChange}
								ref={ref}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>

				<Textarea
					{...register('description', { required: { value: true, message: 'Заполните описание' } })}
					placeholder='Текст отзыва'
					className={styles.descr}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
				/>

				<div className={styles.submit}>
					<Button appearance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</form>

			{isSuccess &&
				<div className={styles.success}>
					<div className={styles['success-title']}>Ваш отзыв отправлен</div>
					<div>
						Спасибо, ваш отзыв булет опубликован после проверки.
					</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			}

			{error &&
				<div className={styles.error}>
					Что-то пошло не так, попробуйте обновить страницу
					<CloseIcon className={styles.close} onClick={() => setError('')} />
				</div>
			}
		</>
	);
};