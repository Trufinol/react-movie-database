import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import Footer from '../common/Footer';

export default class App extends Component {

  render() {
    return (
        <div className='App'>
          <HeaderMenu />
          {this.props.children}
          <Footer />
        </div>
    );
  }
}
