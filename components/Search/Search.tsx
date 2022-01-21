import { useRouter } from 'next/dist/client/router';
import { KeyboardEvent, useState } from 'react';

import { Button, Input } from '..';

import styles from './Search.module.css';
import { SearchIcon } from './search.svg';

export const Search = (): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	return (
		<div className={styles.search}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				className={styles.input}
				onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
					if (e.key == 'Enter') {
						goToSearch();
					}
				}}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</div>
	);
};