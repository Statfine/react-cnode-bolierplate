/**
 * Created by easub on 2016/11/14.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';

import styles from './styles.css';

class Foot extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const arr = [];
    arr[this.props.path] = styles.choose;

    return (
      <div className={styles.foot} >
        <ul className={styles.foot_ul}>
          <li>
            <Link to="/" className={classNames(arr['/'])}>
              首页
            </Link>
          </li>
          <li>
            <Link to="/ReportPage" className={classNames(arr['/ReportPage'])}>
              发表
            </Link>
          </li>
          <li>
            <Link to="/MessagePage" className={classNames(arr['/MessagePage'])}>
              消息
            </Link>
          </li>
          <li>
            <Link to="/User" className={classNames(arr['/user'])}>
              我的
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Foot;
