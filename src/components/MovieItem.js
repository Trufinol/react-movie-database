import React from 'react';
import {
	Item,
	Button
} from 'semantic-ui-react';
import {Link} from 'react-router';
import MovieTable from './MovieTable';

const MovieItem = ({data}) => (
		<Item>
			<Item.Image
				src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : 'http://cibele.it/wp-content/themes/micron/images/placeholders/placeholder_small.jpg'}
				bordered
				size='small'
			/>
			<Item.Content verticalAlign='middle'>
				<MovieTable data={data} />
				<Item.Extra>
					<Link to={`/movies/${data.id}`}>
						<Button content='View Details' basic floated='right' />
					</Link>
				</Item.Extra>
			</Item.Content>
		</Item>
);

MovieItem.propTypes = {
	data: React.PropTypes.object.isRequired,
};
export default MovieItem;
