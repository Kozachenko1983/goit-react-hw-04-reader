import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, allPages }) => (
  <p className={styles.counter}>
    {currentPage} &#8260; {allPages}
  </p>
);
Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  allPages: PropTypes.number.isRequired,
};
export default Counter;
