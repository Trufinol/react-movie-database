import React
//, {PropTypes}
 from 'react';

export default class MovieDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
			<div>
				ID: {this.props.params.id}
			</div>
		);
  }
}

MovieDetails.propTypes = {
};
