import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	.root {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FAFAFA;

		min-height: 100vh;
	}
`

export default GlobalStyle