import React from 'react'
import Head from 'next/head'
import styles from '../styles/Tjenester.module.css'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Zoom from '@material-ui/core/Zoom'
import CoolDivider from '../components/CoolDivider'
import TjenesterBtn from '../components/TjenesterBtn'

const Tjenester = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tjenester</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box>
						<Grid container spacing={2} alignItems='center' justify='center'>
							{/* Line 1 */}
							<Grid item xs={8}>
								<div className={styles.tjenesterBtnWrapper}>
									<TjenesterBtn
										title='Regnskapsføring'
										tjenesterTitle='Regnskapsføring'
										description='Bokføring av bilag, avstemming av kontoer, rapportering til myndighetene. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.'
									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div className={styles.tjenesterBtnWrapper}>
									{/* <TjenesterBtn /> */}
								</div>
							</Grid>
							{/* Line 2 */}
							<Grid item xs={4}>
								<div className={styles.tjenesterBtnWrapper}>
									{/* <TjenesterBtn /> */}
								</div>
							</Grid>
							<Grid item xs={8}>
								<div className={styles.tjenesterBtnWrapper}>
									<TjenesterBtn
										title='Lønn'
										tjenesterTitle='Lønn'
										description='Lonn. Vi kan ta oss av regnskapet fra A til Å, eller bare de delene du ikke ønsker å håndtere selv.'
									/>
								</div>
							</Grid>
							{/* Line 3 */}
							<Grid item xs={8}>
								<div className={styles.tjenesterBtnWrapper}>
									<TjenesterBtn
										title='Årsoppgjør'
										tjenesterTitle='Årsoppgjør'
										description='Når vi tar tar årsoppgjøret for bedriften din, kan du være sikker på at alle lover og regler er fulgt og at myndighetene får den informasjonen de krever.'
									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div className={styles.tjenesterBtnWrapper}>
									{/* <TjenesterBtn /> */}
								</div>
							</Grid>
							{/* Line 4 */}
							<Grid item xs={4}>
								<div className={styles.tjenesterBtnWrapper}>
									{/* <TjenesterBtn /> */}
								</div>
							</Grid>
							<Grid item xs={8}>
								<div className={styles.tjenesterBtnWrapper}>
									<TjenesterBtn
										title='Rådgivning'
										tjenesterTitle='Rådgivning'
										description='Vi tilbyr gode råd hvis du trenger en sparringspartner for spørsmål om bedriftens lønnsomhet, likviditet, skattespørsmål, lån, investeringer og fusjoner.'
									/>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Zoom>
				<CoolDivider />
			</main>
		</div>
	)
}

export default Tjenester
