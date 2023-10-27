import React from 'react';
import styles from './Ticket.module.scss';
import { transfers, duration, travelTime, arrivalTime } from '../../utilites/utilites';

function Ticket({ ticket }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>
          {ticket.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} P
        </span>
        <img src={`https://pics.avs.io/130/40/${ticket.carrier}.png`} alt="logo" />
      </div>
      {ticket.segments.map((segment) => {
        const id = Date.now() + Math.random() * 10;
        return (
          <div className={styles.content} key={id}>
            <div className={styles.description}>
              <span className={styles.sity}>
                {segment.origin} - {segment.destination}
              </span>
              <span className={styles.date}>
                {travelTime(segment)} - {arrivalTime(segment)}
              </span>
            </div>
            <div className={styles.description}>
              <span className={styles.sity}>В пути</span>
              <span className={styles.date}>{duration(segment)}</span>
            </div>
            <div className={styles.description}>
              <span className={styles.sity}>{transfers(segment)}</span>
              <span className={styles.date}>{segment.stops.join(', ')}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Ticket;