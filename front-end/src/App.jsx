import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import { PageProvider } from "./contexts/PageContext";
import MethodContext from "./contexts/MethodContext";
import Home from "./pages/Home";
import Methods from "./pages/Methods";
import SignUp from "./pages/SignUp";
import Progress from "./pages/Progress";
import Alert from "./components/Alert";
import SignIn from "./pages/SignIn";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#655A87",
				lighter: "#8F85AD",
				xlighter: "#C7C2D6"
			},
			secondary: {
				main: "#B6DC76",
				lighter: "#CDE69E",
				xlighter: "#DDEEBE"
			},
			tertiary: {
				main: "#ffffff",
				// lighter: "#CDE69E",
				// xlighter: "#DDEEBE"
			},
			background: {
				// default: "#CDE2F4"
			},
		},
	});

	const [palette, setPalette] = useState("");
	const [method, setMethod] = useState({});
	const [cycle, setCycle] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<MethodContext.Provider value={{ palette, setPalette, method, setMethod, cycle, setCycle }}>
				<PageProvider>
					<AlertProvider>
						<AuthProvider>
							<CssBaseline />
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/methods" element={<Methods />} />
									<Route path="/progress" element={<Progress />} />
									<Route path="/sign-up" element={<SignUp />} />
									<Route path="/sign-in" element={<SignIn />} />
								</Routes>
							</BrowserRouter>
							<Alert />
						</AuthProvider>
					</AlertProvider>
				</PageProvider>
			</MethodContext.Provider>
		</ThemeProvider>
	);
}

export default App;