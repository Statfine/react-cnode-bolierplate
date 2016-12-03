/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import shallowCompare from 'react-addons-shallow-compare';

import styleDashboard from '../Dashboard/styles.css';

class HomePage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <Helmet title="Home" meta={[{ name: 'home', content: 'home' }]} />
        <Header title={'Home'} />
        <div className={styleDashboard.container_content}>
          Home
        </div>
      </div>
    );
  }
}

export default HomePage;
