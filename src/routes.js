import React from 'react';
import  {Route, IndexRoute} from 'react-router';

import App from './components/App';
import NotFoundPage from './common/NotFoundPage';
import MovieDetails from './components/MovieDetails';
import PlaceholderScreen from './components/PlaceholderScreen';
import MovieContainer from './containers/MovieContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PlaceholderScreen}/>
		<Route path="/movies" component={MovieContainer}/>
		<Route path="/movies/:id" component={MovieDetails} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);
