import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const PlaceholderScreen = () => (
	<div>
		<Header as='h2' icon textAlign='center'>
			<Icon name='search' />
			Welcome!
			<Header.Subheader>
				Use search to find some movies
			</Header.Subheader>
		</Header>
	</div>
)

export default PlaceholderScreen;
