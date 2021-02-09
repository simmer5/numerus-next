import React from 'react'
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Zoom from '@material-ui/core/Zoom'

import KontaktIcons from '../components/ContactIcons'

import styles from '../styles/Kontakter.module.css'

const Kontakter = () => {
	return (
		<>
			<Head>
				<title>Kontak Oss | Numerus finans</title>
				<link rel='icon' href='/fav.ico' />
			</Head>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box>
						<KontaktIcons long />
					</Box>
				</Zoom>
			</main>
		</>
	)
}

export default Kontakter
