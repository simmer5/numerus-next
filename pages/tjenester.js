import React from 'react'
import Head from 'next/head'
import styles from '../styles/Tjenester.module.css'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

import TjenesterBtn from '../components/TjenesterBtn'
const useStyles = makeStyles({
	item: {
		margin: '4px',
	},
})
const Tjenester = () => {
	const classes = useStyles()
	return (
		<>
			<Head>
				<title>Tjenester | Numerus finans</title>
				<link rel='icon' href='/fav.ico' />
				<meta
					name='description'
					content='Våre tjenester. Regnskapsføring, løn, rådgivning.'
				/>
			</Head>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box xs={10}>
						<Grid container alignItems='center' justify='center' wrap='wrap'>
							{/* Line 1 */}
							<Grid item className={classes.item}>
								<TjenesterBtn
									title='Regnskapsføring'
									tjenesterTitle='Regnskapsføring'
									description='Bokføring av bilag, avstemming av kontoer, rapportering til myndighetene. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.'
								/>
							</Grid>

							{/* Line 2 */}

							<Grid item className={classes.item}>
								<TjenesterBtn
									title='Lønn'
									tjenesterTitle='Lønn'
									description='Lonn. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.'
								/>
							</Grid>
							{/* Line 3 */}
							<Grid item className={classes.item}>
								<TjenesterBtn
									title='Årsoppgjør'
									tjenesterTitle='Årsoppgjør'
									description='Når vi tar tar årsoppgjøret for bedriften din, kan du være sikker på at alle lover og regler er fulgt og at myndighetene får den informasjonen de krever.'
								/>
							</Grid>

							{/* Line 4 */}

							<Grid item className={classes.item}>
								<TjenesterBtn
									title='Rådgivning'
									tjenesterTitle='Rådgivning'
									description='Vi tilbyr gode råd hvis du trenger en sparringspartner for spørsmål om bedriftens lønnsomhet, likviditet, skattespørsmål, lån, investeringer og fusjoner.'
								/>
							</Grid>
						</Grid>
					</Box>
				</Zoom>
			</main>
		</>
	)
}

export default Tjenester
