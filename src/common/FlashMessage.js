import React, {PropTypes} from 'react';
import {Message} from 'semantic-ui-react';
import './FlashMessage.css';

export default class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.hasError) {
      this.setState({hidden: false})
    }
  }

  handleDismiss = () => {
    this.setState({ hidden: true })
  }
  render() {
    const {errorMessage, hasError} = this.props;
    return (
      hasError ?
        <Message
          negative
          compact
          className="flash-message"
          hidden={this.state.hidden}
          onDismiss={this.handleDismiss}
          header='Oops!'
          content={errorMessage || 'An error happened, but we don\'t know which one'}
        />
        : null
    );
  }
}

FlashMessage.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};
