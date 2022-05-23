import {
	Container,
	Box,
	Button,
	Divider,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import PasswordInput from "../../components/PasswordInput";
import useAlert from "../../hooks/useAlert";
import useAuth from "../..//hooks/useAuth";
import api from "../../services/api";
import TopBar from "../../components/TopBar";

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		textAlign: "center",
		width: "100%",
	},
	title: { marginBottom: "30px" },
	dividerContainer: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		marginTop: "16px",
		marginBottom: "26px",
	},
	input: { marginBottom: "16px" },
	actionsContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
};

export default function SignIn() {
	const { signIn } = useAuth();
	const { setMessage } = useAlert();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleInputChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setMessage(null);

		if (!formData?.email || !formData?.password) {
			setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
			return;
		}

		const { email, password } = formData;

		try {
			const {
				data: { token },
			} = await api.signIn({ email, password });
			signIn(token);
			navigate("/");
		} catch (error) {
			console.log(error);
			if (error.response) {
				setMessage({
					type: "error",
					text: error.response.data,
				});
				return;
			}

			setMessage({
				type: "error",
				text: "Erro, tente novamente em alguns segundos!",
			});
		}
	}

	return (
		<>
			<TopBar></TopBar>
			<Container sx={{ height: "100vh" }} disableGutters={true}>
				<Container component={"main"} sx={{ height: "100%", display: "flex" }}>
					<Form onSubmit={handleSubmit}>
						<Box sx={styles.container}>
							<Typography sx={styles.title} variant="h4" component="h1">
								Login
							</Typography>
							<Box sx={styles.dividerContainer}>
								<Divider sx={{ flex: "1" }} />
							</Box>
							<TextField
								id="email"
								name="email"
								sx={styles.input}
								label="Email"
								type="email"
								variant="outlined"
								onChange={handleInputChange}
								value={formData.email}
							/>
							<PasswordInput
								name="password"
								id="password"
								sx={styles.input}
								label="Senha"
								onChange={handleInputChange}
								value={formData.password}
							/>
							<Box sx={styles.actionsContainer}>
								<Link component={RouterLink} to="/sign-up">
									<Typography>Não possuo cadastro</Typography>
								</Link>
								<Button id="signIn" variant="contained" type="submit">
									Entrar
								</Button>
							</Box>
						</Box>
					</Form>
				</Container>
			</Container>
		</>
	);
}