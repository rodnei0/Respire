import * as React from "react";
import { Typography, AppBar, Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
	const navigate = useNavigate();

	return (
		<AppBar sx={{ position: "fixed", top: 0, left: 0, right: 0, bgcolor: "#ffffff", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<Home onClick={() => {navigate("/");}} sx={{color: "black", width: "30px"}}></Home>
			<Typography variant='h6' color='black'>
                Respire
			</Typography>
			<Box sx={{width: "30px"}}></Box>
		</AppBar>
	);
}