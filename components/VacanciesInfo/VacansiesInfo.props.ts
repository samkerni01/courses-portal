import { HhData } from '../../interfaces/content.iterface';

export interface VacanciesInfoProps extends HhData {
	category: string
}

export interface VacancyInfo {
	level: string;
	salary: number;
	rating: number;
}