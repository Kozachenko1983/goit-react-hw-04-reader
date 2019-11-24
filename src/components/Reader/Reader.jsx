import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import styles from './Reader.module.css';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  getPageNum = () => Number(queryString.parse(this.props.location.search).item);

  handleButtons = event => {
    const { name } = event.target;
    this.props.history.push({
      ...this.props.location,
      search: `item=${
        name === 'next' ? this.getPageNum() + 1 : this.getPageNum() - 1
      }`,
    });
  };

  render() {
    const { items } = this.props;
    const pageNumber = this.getPageNum();
    if (!pageNumber || pageNumber > items.length) {
      return <Redirect to="/reader?item=1" />;
    }
    const disabledPrev = pageNumber <= 1;
    const disabledNext = pageNumber >= items.length;
    return (
      <div className={styles.reader}>
        <Controls
          onChangePage={this.handleButtons}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
        />
        <Counter currentPage={pageNumber} allPages={items.length} />
        <Publication item={items[pageNumber - 1]} />
      </div>
    );
  }
}
