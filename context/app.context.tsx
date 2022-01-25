import { createContext, PropsWithChildren, useState } from 'react';

import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/content.iterface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [newMenu, setNewMenu] = useState<MenuItem[]>(menu);

	const setMenu = (newMenu: MenuItem[]) => {
		setNewMenu(newMenu);
	};

	return (
		<AppContext.Provider value={{ menu, firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	);
};