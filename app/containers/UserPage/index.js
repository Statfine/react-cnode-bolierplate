/**
 * Created by easub on 2016/12/3.
 */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import shallowCompare from 'react-addons-shallow-compare';
import Header from 'components/Header';
import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './styles.css';
import styleDashboard from '../Dashboard/styles.css';

class Userpage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <Helmet title="用户" meta={[{ name: 'home', content: 'home' }]} />
        <Header title={'用户'} />
        <div className={styleDashboard.container_content}>
          <p className={classNames(styles.no_user)}>
            还没又登陆,<Link to="/login" style={{ color: '#108fe9' }}>去登陆?</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Userpage;
