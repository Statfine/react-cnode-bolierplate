/**
 * Created by easub on 2016/10/31.
 */
import React, { Component } from 'react';


import styles from './styles.css';

class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <div className={styles.container_content}>
          {children}
        </div>
      </div>
    );
  }
}

export default Dashboard;
