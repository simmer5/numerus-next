import React from 'react'
import Head from 'next/head'
import styles from '../styles/Tjenester.module.css'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'
import TBtn from '../components/TjenesterBtn'

const useStyles = makeStyles(theme => ({
	contentContainer: {
		alignItems: 'center',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridGap: theme.spacing(1),
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		whiteSpace: 'nowrap',
		marginBottom: theme.spacing(1),
	},
}))

const tjenester = () => {
	const classes = useStyles()
	return (
		<div className={styles.container}>
			<Head>
				<title>Tjenester</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Zoom in={true}>
					<Box className={classes.contentContainer}></Box>
				</Zoom>
				{/*========= Grid starts here ============ */}
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=4</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}>
							<TBtn />
						</Paper>
					</Grid>
					{/* New line */}
					<Grid item xs={8}>
						<Paper className={classes.paper}>xs=8</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=4</Paper>
					</Grid>
					{/* New line */}
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=4</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.paper}>xs=8</Paper>
					</Grid>
					{/* New line */}
					<Grid item xs={8}>
						<Paper className={classes.paper}>xs=8</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>xs=4</Paper>
					</Grid>
				</Grid>
			</main>
		</div>
	)
}

export default tjenester
