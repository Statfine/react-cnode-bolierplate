/**
 * Created by easub on 2016/12/3.
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import shallowCompare from 'react-addons-shallow-compare';
import Header from 'components/Header';
import classNames from 'classnames';
import { Map } from 'immutable';

import styleDashboard from '../Dashboard/styles.css';
import styles from './styles.css';

import {
  initialization, changeData, login,
} from './actions';
import {
  selectorSubmitData, selectorRequesting, selectorError,
} from './selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

class LoginPage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChangeTitle = (e) => {
    this.props.onChangeData({ submitData: { accessToken: e.target.value } });
  };

  render() {
    const { accessToken } = this.props.submitData.toJS();
    const { onLogin, error, requesting } = this.props;

    return (
      <div>
        <Helmet title="登录" meta={[{ name: 'home', content: 'home' }]} />
        <Header title={'登录'} />
        <div className={classNames(styleDashboard.container_content, styles.content)}>
          <input className={styles.input} value={accessToken} onChange={this.handleChangeTitle} type="text" />
          <button
            className={classNames(styles.button, requesting ? '' : styles.ablebutton)}
            onClick={(e) => {
              onLogin();
            }}
          >
            登陆
          </button>
          <p>{error}</p>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  submitData: PropTypes.instanceOf(Map),
  error: PropTypes.string,
  requesting: PropTypes.bool,
  initialization: PropTypes.func,
  onChangeData: PropTypes.func,
  onLogin: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    initialization: () => dispatch(initialization()),
    onChangeData: (val) => dispatch(changeData(val)),
    onLogin: () => dispatch(login()),
  };
}

const mapStateToProps = createStructuredSelector({
  submitData: selectorSubmitData(),
  requesting: selectorRequesting(),
  error: selectorError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
