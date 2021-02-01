import React from 'react'
import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

import Logo from '../Logo/LogoWhite'

function MyApp({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])
	return (
		<>
			<Head>
				<title>My page</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div
					style={{ position: 'absolute', top: 0, left: 0, margin: '1.5rem' }}
				>
					<Link href='/'>
						<a>
							<Logo width='12vw' />
						</a>
					</Link>
				</div>
				<Component {...pageProps} />
				<nav
					style={{
						height: '8vh',
						backgroundColor: 'transparent',
						position: 'absolute',
						bottom: 0,
						width: '100vw',
					}}
				>
					<p>navigaiton</p>
				</nav>
			</ThemeProvider>
		</>
	)
}

export default MyApp
