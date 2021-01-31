import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Logo from '../Logo/LogoWhite'
import Btn from '../components/CoolBtn'

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
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Zoom in={true}>
					<Box className={classes.contentContainer}>
						<Logo width='45vw' />
						{/* <Divider className={classes.divider} /> */}
						<Typography align='center' className={classes.typo}>
							Regnskapstjenester for stotre og melomstore bedrifter
						</Typography>
						<Btn />
					</Box>
				</Zoom>
			</main>
		</div>
	)
}
