import React from 'react'

const CoolDivider = () => {
	return (
		<figure
			style={{
				height: '2px',
				// width: '80vw',
				marginRight: '10px',
				marginLeft: '10px',
				backgroundImage:
					'linear-gradient(90deg, hsla(0, 0%, 100%, 0) 10%, #fff 50%, hsla(0, 0%, 100%, 0) 90%)',
			}}
		></figure>
	)
}

export default CoolDivider
