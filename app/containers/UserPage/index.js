/**
 * Created by easub on 2016/12/3.
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import shallowCompare from 'react-addons-shallow-compare';
import Header from 'components/Header';
import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './styles.css';
import styleDashboard from '../Dashboard/styles.css';

import {
  logOut,
} from './actions';
import {
  selectorLogin,
} from './selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

class Userpage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { login, onLogOut } = this.props;

    return (
      <div>
        <Helmet title="用户" meta={[{ name: 'home', content: 'home' }]} />
        <Header title={'用户'} />
        <div className={styleDashboard.container_content}>
          {
            login ?
              <button
                className={classNames(styles.button)}
                onClick={(e) => onLogOut()}
              >
                退出
              </button>
              :
              <p className={classNames(styles.no_user)}>
                还没又登陆,<Link to="/login" style={{ color: '#108fe9' }}>去登陆?</Link>
              </p>
          }
        </div>
      </div>
    );
  }
}

Userpage.propTypes = {
  login: PropTypes.bool,

  onLogOut: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onLogOut: () => dispatch(logOut()),
  };
}

const mapStateToProps = createStructuredSelector({
  login: selectorLogin(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Userpage);
