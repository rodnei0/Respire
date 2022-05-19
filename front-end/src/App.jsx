import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MethodContext from './contexts/MethodContext';
import Home from './pages/Home';
import Methods from './pages/Methods';
import { useState } from 'react';

function App() {
	const theme = createTheme({
		palette: {
		  primary: {
			main: "#655A87",
			lighter: "#8F85AD",
			xlighter: "#C7C2D6"
		  },
		  secondary: {
			main: '#B6DC76',
			lighter: "#CDE69E",
			xlighter: "#DDEEBE"
		  },
		  background: {
			// default: "#CDE2F4"
		  },
		},
	});

	const [palette, setPalette] = useState('');
	const [method, setMethod] = useState({});

	return (
		<ThemeProvider theme={theme}>
			<MethodContext.Provider value={{palette, setPalette, method, setMethod}}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/methods" element={<Methods />} />
					</Routes>
				</BrowserRouter>
			</MethodContext.Provider>
		</ThemeProvider>
	);
}

export default App;