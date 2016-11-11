/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React, { Component } from 'react';

import styles from './styles.css';
import NoPage from './404.png';

export default class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p className={styles.title}><span style={{ fontSize: '72px' }}>O</span>OPS</p>
        <p className={styles.second_title}>The page you were looking for doesn't exist</p>
        <div className={styles.img_content}>
          <img src={NoPage} className={styles.img} alt="img" />
          <a href="/home"><button className={styles.btn}>Back Home</button></a>
        </div>
      </div>
    );
  }
}
