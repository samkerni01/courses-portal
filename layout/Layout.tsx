import { FunctionComponent, useRef, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { AppContextProvider, IAppContext } from '../context/app.context';
import { LayoutProps } from './Layout.props';

import styles from './Layout.module.css';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Up } from '../components';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [skipLinkDisplayed, setSkipLinkDisplayed] = useState<boolean>(false);
	const bodyRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.wrapper}>
			<a
				tabIndex={1}
				className={cn(styles.skipLink, {
					[styles.displayed]: skipLinkDisplayed
				})}
				onFocus={() => setSkipLinkDisplayed(true)}
				onBlur={() => setSkipLinkDisplayed(false)}
				onKeyPress={(e: KeyboardEvent<HTMLAnchorElement>) => {
					if (e.key == 'Enter') {
						bodyRef.current?.focus();
					}
				}}
			>
				Сразу к содержимому
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body} ref={bodyRef} tabIndex={0}>
				{children}
			</div>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};