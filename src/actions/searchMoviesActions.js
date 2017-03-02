import {SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE} from './actionTypes';
import {callSearchMovies} from '../api';

export const searchMovies = query => ({
	type: SEARCH_MOVIES_REQUEST,
	query
});

export const searchMoviesFailure = error => ({
	type: SEARCH_MOVIES_FAILURE,
	error
});

export const searchMoviesSuccess = response => ({
	type: SEARCH_MOVIES_SUCCESS,
	response
});

export const fetchMovies = (query, page) => dispatch => {
	dispatch(searchMovies(query));
	return fetch(callSearchMovies(query, page))
	// TODO error handling function
  .then(res => {
		if(!res.ok) {
			if(res.status === 401) {
				throw new Error('Invalid API key.')
			}
			throw new Error(res.status)
		}
		return res.json()
	},
	 err => {
		 throw new Error ('Request error')
	 })
  .then(
		json => {
		if(json.results.length<1) {
			const err = new Error(`Sorry, there is no "${query}" in our database :(`)
			return dispatch(searchMoviesFailure(err.message))
		}
		return dispatch(searchMoviesSuccess(json))
	}, err => dispatch(searchMoviesFailure(err.message))
	)
}
