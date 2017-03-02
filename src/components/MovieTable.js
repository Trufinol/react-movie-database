import React from 'react';
import {Table, Header} from 'semantic-ui-react';

const MovieTable = ({data}) => {
	const {title, release_date, vote_average, overview} = data;

	return (
		<Table basic='very' celled collapsing>
			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<Header as='h4'>
							Title
						</Header>
					</Table.Cell>
					<Table.Cell>
						{title}
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as='h4'>
							Release Date
						</Header>
					</Table.Cell>
					<Table.Cell>
						{new Date(release_date).toLocaleDateString()}
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as='h4'>
							Vote Average
						</Header>
					</Table.Cell>
					<Table.Cell>
						{vote_average}
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as='h4'>
							Overview
						</Header>
					</Table.Cell>
					<Table.Cell>
						{overview}
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
}

export default MovieTable;
