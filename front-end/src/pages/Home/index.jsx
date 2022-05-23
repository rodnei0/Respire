import * as React from "react";
import { Container } from "@mui/material";
import BottomNav from "../../components/BottomNav";
import TopBar from "../../components/TopBar";
import MethodsMenu from "../MethodsMenu";
import Progress from "../Progress";
import usePage from "../../hooks/usePage";

export default function Home() {
	const { page } = usePage();

	return (
		<Container sx={{ height: "100vh", pt: 5, pb: 8}} disableGutters={true}>
			<TopBar></TopBar>
			<Container component={"main"} sx={{ height: "100%"}}>
				{page === "methodsMenu" ? <MethodsMenu /> : <Progress />}
			</Container>
			<BottomNav></BottomNav>
		</Container>
	);
}