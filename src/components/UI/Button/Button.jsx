import React from 'react';
import { useDispatch } from 'react-redux';
import { addTickets } from '../../../store/ticketsSlice';
import styles from './Button.module.scss';

function Button() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addTickets())} type="button" className={styles.button}>
      Показать еще 5 билетов!
    </button>
  );
}

export default Button;