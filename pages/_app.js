import '../styles/globals.css'
import Link from 'next/link'

import Logo from '../Logo/LogoWhite'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div style={{ position: 'absolute', top: 0, left: 0, margin: '1.5rem' }}>
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
		</>
	)
}

export default MyApp
