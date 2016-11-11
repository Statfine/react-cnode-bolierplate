/**
 * Created by easub on 2016/11/11.
 */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';
import BackImg from './back.png';
import Close from './close.png';

import styles from './styles.css';

export default class Header extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleLogout = () => {
    browserHistory.push('/');
  };

  render() {
    const { back } = this.props;

    return (
      <div className={styles.titleHeader}>
        {
          back ?
            <image
              src={BackImg}
              className={styles.back}
              onClick={(e) => history.back()}
              alt="image"
            />
            :
            <div></div>
        }
        {this.props.title}
        <image
          src={Close}
          className={styles.close}
          onClick={this.handleLogout}
          alt="image"
        />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.bool,
};
