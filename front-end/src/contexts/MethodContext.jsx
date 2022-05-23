import { createContext, useState } from "react";

export const MethodContext = createContext(null);

export function MethodProvider({ children }) {
	const [palette, setPalette] = useState("");
	const [method, setMethod] = useState({});
	const [cycle, setCycle] = useState(0);

	return (
		<MethodContext.Provider value={{ palette, setPalette, method, setMethod, cycle, setCycle }}>
			{children}
		</MethodContext.Provider>
	);
}