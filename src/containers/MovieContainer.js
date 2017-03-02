import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import MovieList from '../components/MovieList';
import {fetchMovies} from '../actions/searchMoviesActions';
import PlaceholderScreen from '../components/PlaceholderScreen';
import FlashMessage from '../common/FlashMessage';
import Pagination from '../common/Pagination';

class MovieContainer extends React.Component {

	componentDidMount() {
		let {q} = this.props.location.query;
		if(q) {
			this.props.fetchMovies(q);
		}
	}

	componentDidUpdate(prevProps) {
		let {q} = this.props.location.query;
		let prevSearch = prevProps.location.query.q;
		if(q !== prevSearch) {
			this.props.fetchMovies(q);
		}
	}

	fetchSelectedPage = (page) => {
		let {q} = this.props.location.query;
		this.props.fetchMovies(q, page);
	}

	render() {
		const {
			movies: {
				items,
				hasError,
			  errorMessage,
				totalPages,
				totalResults,
				currentPage
			},
			location:{query:{q}}
		 } = this.props;

		if(isEmpty(items)) {
			return (
				<div>
					<FlashMessage hasError={hasError} errorMessage={errorMessage} />
					<PlaceholderScreen />
				</div>
			)
		}
		return (
			<div>
				<FlashMessage hasError={hasError} errorMessage={errorMessage} />
				<MovieList
					data={items}
					query={q}
					totalResults={totalResults}
				/>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handleFetchPage={this.fetchSelectedPage}
				/>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps, {fetchMovies})(MovieContainer);
