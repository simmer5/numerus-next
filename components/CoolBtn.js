import React from 'react'
import styles from '../styles/CoolBtn.module.css'

const CoolBtn = () => {
	return (
		<div className={styles.scBtnContainer}>
			<div className={styles.scBtnDiv}>
				<div className={styles.scBtnTop}>
					<div className={styles.borderTop}></div>
				</div>
				<div className={styles.scBtnBottom}>
					<div className={styles.borderBottom}></div>
				</div>
				<p
					style={{
						color: 'red',
						margin: 0,
						position: 'absolute',
						top: '7px',
						left: '60px',
					}}
				>
					Labas rytas
				</p>
			</div>
			<div className={styles.scBtnGlow}></div>
		</div>
	)
}

export default CoolBtn
