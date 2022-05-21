import {
	AppBar,
	Box,
	Button,
	Container,
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
import api from "../../services/api";
import { ArrowBack } from '@mui/icons-material';

const styles = {
	container: {
		display: "flex",
		justifyContent: 'center',
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



export default function SignUp() {
	const { setMessage } = useAlert();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		passwordConfirmation: "",
	});

	function handleInputChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setMessage(null);

		if (
			!formData?.email ||
			!formData?.password ||
			!formData?.passwordConfirmation
		) {
			setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
			return;
		}

		const { email, password, passwordConfirmation } = formData;

		if (password !== passwordConfirmation) {
			setMessage({ type: "error", text: "As senhas devem ser iguais!" });
			return;
		}

		try {
			await api.signUp({ email, password });
			setMessage({ type: "success", text: "Cadastro efetuado com sucesso!" });
			// navigate("/login");
		} catch (error) {
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
			<AppBar sx={{ position: 'fixed', top: 0, left: 0, right: 0, bgcolor: '#ffffff'}}>
				<ArrowBack onClick={() => {navigate(-1)}} sx={{color: 'black'}}></ArrowBack>
			</AppBar>
			<Container sx={{ height: '100vh'}} disableGutters={true}>
				<Container component={'main'} sx={{ height: '100%', display: 'flex'}}>
					<Form onSubmit={handleSubmit}>
						<Box sx={styles.container}>
							<Typography sx={styles.title} variant="h4" component="h1">
								Cadastro
							</Typography>
							<Button variant="contained" color="secondary">
								Entrar com Github
							</Button>
							<Box sx={styles.dividerContainer}>
								<Divider sx={{ flex: "1" }} />
								<Typography variant="caption" component="span">
									ou
								</Typography>
								<Divider sx={{ flex: "1" }} />
							</Box>
							<TextField
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
								sx={styles.input}
								label="Senha"
								onChange={handleInputChange}
								value={formData.password}
								/>
							<PasswordInput
								name="passwordConfirmation"
								sx={styles.input}
								label="Confirme sua senha"
								onChange={handleInputChange}
								value={formData.passwordConfirmation}
								/>
							<Box sx={styles.actionsContainer}>
								<Link component={RouterLink} to="/login">
									<Typography>Já possuo cadastro</Typography>
								</Link>
								<Button variant="contained" type="submit">
									Cadastrar
								</Button>
							</Box>
						</Box>
					</Form>
				</Container>
			</Container>
		</>
	);
}