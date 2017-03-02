import { combineReducers } from 'redux';
import {SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE} from '../actions/actionTypes';

const initialState = {
  items: [],
  isFetching: false,
  hasError: false,
  errorMessage: ''
};

function movieReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        items: [],
        currentPage: 0,
        totalPages: 0,
        totalResults: 0,
        isFetching: true,
        hasError: false,
      }
    case SEARCH_MOVIES_SUCCESS:
      const {results, page, total_pages, total_results} = action.response;
      return {
        ...state,
        items: results,
        currentPage: page,
        totalPages: total_pages,
        totalResults: total_results,
        hasError: false,
        isFetching: false
      }
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        hasError: true,
        isFetching: false,
        errorMessage: action.error
      }
    default:
      return state;
  }
}



const rootReducer = combineReducers({
	movies: movieReducer,
});

export default rootReducer;
