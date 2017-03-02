import React from 'react';
import {Container, Item} from 'semantic-ui-react';
import MovieItem from './MovieItem';
import SearchDivider from '../common/SearchDivider';

const MovieList = ({data, query, totalResults}) => {
	const movieItems = data.map((item) => (
		<MovieItem
			key={item.id}
			data={item}
		/>
	));

	return (
		<Container text>
			<SearchDivider query={query} totalResults={totalResults} />
			<Item.Group divided>
				{movieItems}
			</Item.Group>
		</Container>
	);
}

MovieList.propTypes = {
	data: React.PropTypes.array.isRequired,
};

export default MovieList;
