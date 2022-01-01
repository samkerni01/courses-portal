import { HTMLAttributes } from 'react';
import { UpIcon as up, CloseIcon as close, MenuIcon as menu } from './icons';

export const icons = {
	up,
	close,
	menu
};

export type IconName = keyof typeof icons;

export interface ButtonMiniProps extends HTMLAttributes<HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}