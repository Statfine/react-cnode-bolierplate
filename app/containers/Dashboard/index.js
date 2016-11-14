/**
 * Created by easub on 2016/10/31.
 */
import React, { Component } from 'react';
import Header from 'components/Header';
import Foot from './Foot';

import styles from './styles.css';

class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <Header title={'Home'} />
        <div className={styles.container_content}>
          {children}
        </div>
        <Foot />
      </div>
    );
  }
}

export default Dashboard;
