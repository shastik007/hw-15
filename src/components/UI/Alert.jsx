import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import React from 'react'
import Card from './Card'

class AlertWarning extends React.Component {
	render() {
		return (
			<Card className={this.props.className} >
				<Stack  sx={{ width: '100%' }} spacing={2}>
					<Alert
                        className={this.props.className}
						variant='filled'
						onClose={() => {this.props.onClose('CLOSE_MODAL')}}
						severity='warning'
					>
						{this.props.title}
					</Alert>
				</Stack>
			</Card>
		)
	}
}

export default AlertWarning
