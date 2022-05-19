import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Methods from './pages/Methods';

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
			lighter: "#C3E28D",
			xlighter: "#DDEEBE"
		  },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/methods" element={<Methods />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;