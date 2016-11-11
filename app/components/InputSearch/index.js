/**
 * Created by easub on 2016/11/7.
 */
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import ActionSearch from 'material-ui/svg-icons/action/search';

import styles from './styles.css';

class InputSearch extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChangeFilterTitle = (e) => this.props.onChangeData(e.target.value);

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.enterAction();
    }
  };

  render() {
    const { title, placeholder, className } = this.props;
    return (
      <div className={classNames(styles.search_container, className)}>
        <div className={classNames(styles.search_bar)}>
          <input
            className={classNames(styles.search_input)}
            placeholder={placeholder}
            value={title}
            onChange={this.handleChangeFilterTitle}
            onKeyDown={this.handleEnter}
          />
          <span className={classNames(styles.search_icon)}>
            <ActionSearch color={'#B8C2CC'} hoverColor={'#454545'} />
          </span>
        </div>
      </div>
    );
  }
}

InputSearch.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeData: PropTypes.func,
  enterAction: PropTypes.func,
  className: PropTypes.string,
};

export default InputSearch;
