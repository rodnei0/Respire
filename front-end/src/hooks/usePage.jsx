import { useContext } from "react";
import { PageContext } from "../contexts/PageContext"; 

export default function usePage() {
	const pageContext = useContext(PageContext);
	if (!pageContext) {
		throw new Error("usePage must be used inside a PageContext Provider");
	}

	return pageContext;
}