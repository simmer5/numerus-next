import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'

import Logo from '../Logo/LogoWhite'
import CoolDivider from '../components/CoolDivider'

const useStyles = makeStyles({
	contentContainer: {
		alignItems: 'center',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	typo: {
		color: 'white',
		width: '80%',
		fontFamily: 'Tahoma, Geneva, sans-serif',
	},
	divider: {
		margin: '25px 0px',
		borderColor: 'white',
		width: '80%',
		borderWidth: '1px 0 0 0',
		borderStyle: 'solid',
	},
})

export default function Home() {
	const classes = useStyles()
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box className={classes.contentContainer}>
						<Logo width='25vw' />
						<Container style={{ margin: '1rem' }}>
							<CoolDivider />
						</Container>

						<Typography align='center' className={classes.typo}>
							Regnskapstjenester for stotre og melomstore bedrifter
						</Typography>
					</Box>
				</Zoom>
			</main>
		</div>
	)
}
