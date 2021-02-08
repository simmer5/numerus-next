import React from 'react'
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Zoom from '@material-ui/core/Zoom'

import KontaktIcons from '../components/ContactIcons'

import styles from '../styles/Kontakter.module.css'

const Kontakter = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tjenester</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box>
						<KontaktIcons long />
					</Box>
				</Zoom>
			</main>
		</div>
	)
}

export default Kontakter
