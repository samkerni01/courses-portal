export interface ReviewFormProps {
	productId: string;
	isOpened: boolean;
}

export interface IReviewForm {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface IReviewSentResponse {
	message: string
}