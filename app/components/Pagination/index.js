/**
 * Created by easub on 2016/10/24.
 */
import React, { Component, PropTypes } from 'react';

import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import styles from './styles.css';

const styleContent = {
  ico: {
    cursor: 'pointer',
    width: '28px',
    height: '28px',
    verticalAlign: 'middle',
    margin: '0 5px',
  },
};

export default class Pagition extends Component {

  previous = () => {
    const { page, getPageList } = this.props;
    if (page > 1) {
      getPageList(page - 1);
    }
  };

  next = () => {
    const { page, maxPage, getPageList } = this.props;
    if (page < maxPage) {
      getPageList(page + 1);
    }
  };

  handleEnterPage = (e) => {
    const { page, getPageList } = this.props;
    if (e.keyCode === 13) {
      getPageList(page);
    }
  };

  render() {
    const { className, style, page, maxPage, onChangePage } = this.props;

    return (
      <div
        className={className}
        style={style}
      >
        <ArrowLeft
          color={page < 2 ? '#e3e3e3' : '#696969'}
          hoverColor={page < 2 ? '#e3e3e3' : '#108fe9'}
          style={styleContent.ico}
          onClick={this.previous}
        />
        <input
          className={styles.input_number}
          type="number"
          value={page}
          onChange={(e) => onChangePage(Number(e.target.value))}
          onKeyDown={this.handleEnterPage}
        />
        <ArrowRight
          color={page < maxPage ? '#696969' : '#e3e3e3'}
          hoverColor={page < maxPage ? '#108fe9' : '#e3e3e3'}
          style={styleContent.ico}
          onClick={this.next}
        />
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }

}

Pagition.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  onChangePage: PropTypes.func,
  getPageList: PropTypes.func,
};
