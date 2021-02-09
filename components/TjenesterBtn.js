import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import styles from '../styles/TjenesterBtn.module.css'

const useStyles = makeStyles({
	titleContainer: { fontSize: '2rem' },
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	paper: {
		color: '#00A6FF',
		borderWidth: '1.5px',
		borderStyle: 'solid',
		borderImage:
			'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1',
		padding: '1rem 1.2rem',
		backgroundColor: '#0B0B0B',
		display: 'flex',
		flexDirection: 'column',
		width: '80vw',
	},

	closeIcon: {
		alignSelf: 'flex-end',
		cursor: 'pointer',
	},
})
const TjenesterBtn = ({ title, tjenesterTitle, description }) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const handleOpen = idx => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<div className={styles.btn} onClick={handleOpen} >
				<span className={styles.noselect}>{title}</span>
			</div>
			<Modal className={classes.modal} open={open} onClose={handleClose}>
				<Fade in={open}>
					<div className={classes.paper}>
						<div className={classes.titleContainer}>{tjenesterTitle}</div>
						<p>{description}</p>
						<CloseIcon className={classes.closeIcon} onClick={handleClose} />
					</div>
				</Fade>
			</Modal>
		</>
	)
}

export default TjenesterBtn
