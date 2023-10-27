import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transferFilter } from '../../../store/filterTicketsSlice';
import { selectToggle } from '../../../store/selectors';
import styles from './Input.module.scss';

function Input({ title, id }) {
  const toggle = useSelector(selectToggle);
  const dispatch = useDispatch();
  const isChecked = toggle[id];

  return (
    <label htmlFor={title} className={styles.label}>
      <input
        id={title}
        checked={isChecked}
        className={styles.input}
        type="checkbox"
        onChange={() => dispatch(transferFilter({ id, isChecked }))}
      />
      <span className={styles.span}>{title}</span>
    </label>
  );
}

export default Input;