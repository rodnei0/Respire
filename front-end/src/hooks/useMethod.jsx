import { useContext } from "react";
import { MethodContext } from "../contexts/MethodContext";

export default function useMethod() {
	const methodContext = useContext(MethodContext);
	if (!methodContext) {
		throw new Error("usePage must be used inside a PageContext Provider");
	}

	return methodContext;
}