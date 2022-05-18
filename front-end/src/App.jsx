import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Methods from './pages/Methods';

function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/methods" element={<Methods />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;