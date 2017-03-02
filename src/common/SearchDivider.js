import React from 'react';
import {Divider} from 'semantic-ui-react';
import './SearchDivider.css';

const SearchDivider = ({query, totalResults}) => {
	if(query) {
		return(
				<Divider
					horizontal
					className='search-results'
				>
					Found {totalResults} matches for &laquo;{query}&raquo;
				</Divider>
			);
	}
	return null;
};

SearchDivider.propTypes = {
	query: React.PropTypes.string
};

export default SearchDivider;
