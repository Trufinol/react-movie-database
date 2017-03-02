import React from 'react';
import {
	Header,
	Icon
} from 'semantic-ui-react';

const NotFoundPage = () => (
	<div>
		<Header as='h1' icon textAlign='center'>
			<Icon name='ban' circular />
			<Header.Content>
				404
			</Header.Content>
			<Header.Subheader>
				Didn't implement that yet
			</Header.Subheader>
		</Header>
	</div>
);

export default NotFoundPage;
