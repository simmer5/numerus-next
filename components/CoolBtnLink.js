import React from 'react'
import Link from 'next/link'
import styles from '../styles/CoolBtn.module.css'

const CoolBtnLink = ({ btnText, link }) => {
	return (
		<div className={styles.wrapper}>
			<Link href={`/${link}`}>
				<a>
					<div className={styles.btn}>
						<span className={styles.noselect}>{btnText}</span>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default CoolBtnLink
