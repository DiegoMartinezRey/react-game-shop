import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
