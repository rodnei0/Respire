import * as React from "react";
import { CircularProgress, Container } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useAlert from "../../hooks/useAlert";
import usePage from "../../hooks/usePage";

export default function Progress() {
	const { token } = useAuth();
	const { setMessage } = useAlert();
	const { setDisabled } = usePage();
	const navigate = useNavigate();
	const [value, onChange] = React.useState(new Date());

	function IsLogged() {
		let isToken = token ? true : false;
		React.useEffect(() => {
			if (!isToken) {
				setDisabled(true);
				setMessage({ type: "info", text: "Você precisa estar logado para visualizar seu progresso!" });
				setTimeout(() => {
					navigate("/sign-up");
				},1500);
			} 
		},[isToken]);
		return isToken;
	}

	return (
		<Container sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
			{IsLogged() ? <Calendar onChange={onChange} value={value} /> : <CircularProgress />}
		</Container>
	);
}