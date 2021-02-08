import React, { useState } from 'react'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'

import Link from 'next/link'

const useStyles = makeStyles(
	{
		root: {
			backgroundColor: '#252732',
			color: '#00a6ff',
			border: '1px solid #00a6ff',
		},
		iFrame: {
			color: '#00a6ff',
			border: '2px solid white',
			margin: '1rem',
			padding: '1rem',
			display: 'flex',
			transition: 'all 300ms ease 0s',
			'&:hover': {
				borderStyle: 'solid',
				borderImage:
					'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,231,1) 57%, rgba(0,212,255,1) 100%) 1',
				transform: 'scale(1.01)',
				cursor: 'pointer',
			},
		},
	},
	{ name: 'MuiSnackbarContent' }
)
const ContactIcons = () => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleClick = text => {
		setOpen(true)
		navigator.clipboard.writeText(text)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<Box flexWrap='wrap' display='flex' justifyContent='center'>
			<Box className={classes.iFrame}>
				<CallIcon />
				<Box onClick={() => handleClick('+47 401 72372')}>+47 401 72372</Box>
			</Box>
			<Box
				className={classes.iFrame}
				onClick={() => handleClick('post@numerusfinans.no')}
			>
				<MailIcon />
				<Box> post@numerusfinans.no</Box>
			</Box>
			<Box className={classes.iFrame}>
				<LocationOnIcon />

				<Box>
					<Link href='https://www.google.com/maps/place/Regnbueveien+2,+1405+Langhus/@59.771718,10.8465043,17z/data=!3m1!4b1!4m5!3m4!1s0x464167f32ddd60f3:0x36bc43db8b60e8dd!8m2!3d59.771718!4d10.848693'>
						<a target='_blank'>Regnbueveien 2, 1405 Langhus</a>
					</Link>
				</Box>
			</Box>
			<Snackbar
				className={classes.snackbar}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				message='Teksten ble kopiert...'
				action={
					<>
						<IconButton
							size='small'
							aria-label='close'
							color='inherit'
							onClick={handleClose}
						>
							<CloseIcon fontSize='small' />
						</IconButton>
					</>
				}
			/>
		</Box>
	)
}

export default ContactIcons
