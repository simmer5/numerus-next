import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../theme'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* PWA primary color */}
					<meta
						name='google-site-verification'
						content='mGcv_av9jhEaPKBo128Fr47SC4anM2-_aj5U5LebCf0'
					/>
					<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
					<meta name='title' content='Numerus finans' />
					<meta
						name='description'
						content='Regnskapstjenester for store og mellomstore bedrifter. Kontakt oss: post@numerusfinans.no'
					/>
					<meta
						name='keywords'
						content='regnskap, autorisert regnskapsfører,  apskaita norvegijoje, imones atidarymas norvegijoje, firma norvegijoje'
					/>
					<meta name='robots' content='index, follow' />

					<meta name='author' content='MiSt' />
					<meta name='og:title' content='Numerus finans' />
					<meta name='og:description' content='Tryge regnskapstjenester.' />
					<meta name='theme-color' content={theme.palette.primary.main} />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}
