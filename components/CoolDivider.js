import React from 'react'

const CoolDivider = () => {
	return (
		<div
			style={{
				position: 'relative',
				bottom: '1px',
				height: '2px',
				width: '80vw',
				marginRight: '10px',
				marginLeft: '10px',
				backgroundImage:
					'linear-gradient(90deg, hsla(0, 0%, 100%, 0) 10%, #fff 50%, hsla(0, 0%, 100%, 0) 90%)',
			}}
		></div>
	)
}

export default CoolDivider
