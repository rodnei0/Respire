import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';


function App() {
	return (
			<BrowserRouter>
				<ResetStyleCSS />
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;