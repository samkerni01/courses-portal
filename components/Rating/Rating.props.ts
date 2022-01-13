import { FieldError } from 'react-hook-form';

export default interface RatingProps {
	rating?: number;
	isEditable?: boolean;
	setRatingOfForm?: (rating: number) => void;
	error?: FieldError;
	tabIndex?: number;
}