/**
 * Created by easub on 2016/10/31.
 */
import React, { Component } from 'react';
import Foot from './Foot';

class Dashboard extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div style={{ height: '100vh' }}>
        {children}
        <Foot path={location.pathname} />
      </div>
    );
  }
}

export default Dashboard;
