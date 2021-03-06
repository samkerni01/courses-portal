import { FunctionComponent, useRef, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { Header, Sidebar, Footer } from './layout-items';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';

import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [skipLinkDisplayed, setSkipLinkDisplayed] = useState<boolean>(false);
	const bodyRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.wrapper}>
			<div
				tabIndex={0}
				className={cn(styles['skip-link'], {
					[styles.displayed]: skipLinkDisplayed
				})}
				onFocus={() => setSkipLinkDisplayed(true)}
				onBlur={() => setSkipLinkDisplayed(false)}
				onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => {
					if (e.key == 'Enter') {
						bodyRef.current?.focus();
					}
				}}
			>
				Сразу к содержимому
			</div>
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