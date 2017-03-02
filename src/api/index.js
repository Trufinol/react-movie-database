export const API_KEY = '44e41345d85a78566d44c527fc60337f';
export const API_ROOT = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

export const SEARCH_MOVIES_URL = `${API_ROOT}/search/movie?api_key=${API_KEY}`;

export function callSearchMovies(query, page) {
	if(page) {
		return `${SEARCH_MOVIES_URL}&query=${query}&page=${page}`;
	}
	return `${SEARCH_MOVIES_URL}&query=${query}`;
}

// GET /movie/{movie_id}/credits - get actors info
