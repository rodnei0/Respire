import * as React from "react";
import { Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Widgets, Assessment } from "@mui/icons-material";
import usePage from "../../hooks/usePage";

export default function BottomNav() {
	const { setPage, disabled } = usePage();
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		if (value === 0) setPage("methodsMenu");
		if (value === 1) setPage("progress");
	}, [value, setPage]);

	return (
		<Paper component={"footer"} sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction id="methods" label="Métodos" icon={<Widgets />} disabled={disabled}/>
				<BottomNavigationAction id="progress" label="Progresso" icon={<Assessment />} disabled={disabled}/>
			</BottomNavigation>
		</Paper>
	);
}