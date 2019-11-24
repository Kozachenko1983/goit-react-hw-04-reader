import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onChangePage, disabledPrev, disabledNext }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="prev"
      className={styles.button}
      onClick={onChangePage}
      disabled={disabledPrev}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      className={styles.button}
      onClick={onChangePage}
      disabled={disabledNext}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  disabledNext: PropTypes.bool.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
};

export default Controls;
