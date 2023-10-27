import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Tab.module.scss';
import { onTabs } from '../../store/sortTicketsSlice';
import { selectTabs } from '../../store/selectors';

function Tab({ title, id }) {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTabs);
  let className = styles.tab;
  if (tabs.cheap && id === 'cheap') {
    className = `${className} ${styles.select}`;
  }
  if (tabs.fast && id === 'fast') {
    className = `${className} ${styles.select}`;
  }
  if (tabs.optimal && id === 'optimal') {
    className = `${className} ${styles.select}`;
  }

  return (
    <button onClick={() => dispatch(onTabs({ id }))} type="button" className={className}>
      {title}
    </button>
  );
}

export default Tab;