import { createContext, useState } from "react";

export const PageContext = createContext(null);

export function PageProvider({ children }) {
    const [page, setPage] = useState('methodsMenu');
    const [disabled, setDisabled] = useState(false)

	return (
		<PageContext.Provider value={{ page, setPage, disabled, setDisabled }}>
			{children}
		</PageContext.Provider>
	);
}