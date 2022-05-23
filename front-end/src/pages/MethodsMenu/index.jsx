import * as React from "react";
import { Typography, Slider, Card, CardActions, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMethod from "../../hooks/useMethod";

export default function MethodsMenu() {
	const { setPalette, setMethod, setCycle } = useMethod();
	const navigate = useNavigate();
	React.useEffect(() => {
		setCycle(1);
	});

	function handleMethod(method) {
		const totalTime = method === "primary" ? 19000 : 16000;
		const breatheTime = method === "primary" ? 4000 : 4000;
		const holdTime = method === "primary" ? 7000 : 4000; 
		const breatheOutTime = method === "primary" ? 8000 : 4000; 

		setPalette(method);
		setMethod({
			type: method,
			totalTime: totalTime,
			breatheInTime: breatheTime,
			holdTime: holdTime,
			breatheOutTime: breatheOutTime
		});

		navigate("/methods");
	}

	const methods = [
		{
			type: "primary",
			name: "Método 4-7-8",
			description: "Um tranquilizante natural para o sisterma nervoso, auxiliando em um sono de melhor qualidade"
		},
		{
			type: "secondary",
			name: "Método Caixa",
			description: "Um exercício muito simples porém muito efetivo para aliviar o stress"
		},
	];

	return (
		<Grid container sx={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
			{methods.map(method => {
				return (
					<Grid item sx={{ height: "48%", width: "100%" }} key={method.type}>
						<Card
							onClick={() => { handleMethod(method.type); }}
							sx={{ bgcolor: `${method.type}.lighter`, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", "&:hover": { cursor: "pointer" } }}
						>
							<CardContent>
								<Typography variant='h5' align='center' id='name'>
									{method.name}
								</Typography>
								<Typography variant='body1' align='center'>
									{method.description}
								</Typography>
							</CardContent>
							<CardActions sx={{ width: "70%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
								<Slider onChange={(e) => setCycle(e.target.value)} defaultValue={1} step={1} marks min={1} max={10} valueLabelDisplay="auto" color='tertiary' />
								<Typography variant='body1' align='center'>
                                    Escolha quantos ciclos você deseja fazer
								</Typography>
							</CardActions>
						</ Card>
					</Grid>
				);
			})}
		</Grid>
	);
}