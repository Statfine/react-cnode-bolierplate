/**
 * Created by easub on 2016/11/4.
 */
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

export default class CircleLoading extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderCircle = () => {
    const { loading, children, error } = this.props;
    if (loading) {
      return (<div className={styles.circular_loading}><CircularProgress size={60} /></div>);
    } else if (error !== '') {
      return (<div className={styles.circular_loading}><p className={styles.no_data}>{error}</p></div>);
    } else if (!children || children.size === 0) {
      return (<div className={styles.circular_loading}><p className={styles.no_data}>暂无内容</p></div>);
    }
    return children;
  };

  render() {
    return (
      <div>
        {this.renderCircle()}
      </div>
    );
  }

}

CircleLoading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
