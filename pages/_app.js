import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import NavBtn from '../components/CoolBtnLink'

import Logo from '../Logo/LogoWhite'
import CoolDivider from '../components/CoolDivider'

function MyApp({ Component, pageProps }) {
	const [width, setWidth] = useState('')
	const [height, setHeight] = useState(`undefined`)
	const breakpoint = 720
	useEffect(() => {
		if (height === `undefined`) {
			setHeight(window.innerHeight)
		}
	}, [height])

	useEffect(() => {
		const handleWindowHeight = () => setHeight(window.innerHeight)
		window.addEventListener('resize', handleWindowHeight)
		return () => window.removeEventListener('resize', handleWindowHeight)
	}, [])

	useEffect(() => {
		setWidth(window.innerWidth)
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<div style={{ height: `${height}px`, backgroundColor: ' rgb(0, 0, 0)' }}>
			<Head>
				<title>Numerus finans | Regnskapstjenester</title>
				<link rel='icon' href='/fav.ico' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<figure
					style={{ position: 'absolute', top: 0, left: 0, margin: '1.5rem' }}
				>
					<Link href='/'>
						<a>
							<Logo width={width > breakpoint ? '12vw' : '32vw'} />
						</a>
					</Link>
				</figure>
				<Component {...pageProps} />
				<footer
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'absolute',
						bottom: 0,
						justifyContent: 'center',
						width: '100vw',
					}}
				>
					<CoolDivider />
					<nav
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							margin: '8px 0px',
							alignSelf: 'center',
						}}
					>
						<NavBtn btnText='Tjenester' link='tjenester' />
						<NavBtn btnText='Kontakt' link='kontakter' />
					</nav>
				</footer>
			</ThemeProvider>
		</div>
	)
}

export default MyApp
