import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Ticket from '../Ticket/Ticket';
import Button from '../UI/Button/Button';
import * as data from '../../store/selectors';


function ListTickets() {
  let id = uuidv4();
  const showTickets = useSelector(data.selectShowTickets);
  const tickets = useSelector(data.selectTickets);
  const toggle = useSelector(data.selectToggle);
  const onTabs = useSelector(data.selectTabs);

  const ticketsFilter = tickets.filter((ticket) =>
    ticket.segments.some((segment) => {
      if (toggle.transfers) return segment;
      if (toggle.withoutTransfers && segment.stops.length === 0) {
        return true;
      }
      if (toggle.oneTransfer && segment.stops.length === 1) {
        return true;
      }
      if (toggle.twoTransfer && segment.stops.length === 2) {
        return true;
      }
      if (toggle.threeTransfer && segment.stops.length === 3) {
        return true;
      }
      return false;
    }),
  );

  if (onTabs.cheap) {
    ticketsFilter.sort((a, b) => a.price - b.price);
  }
  if (onTabs.fast) {
    ticketsFilter.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration),
    );
  }
  if (onTabs.optimal) {
    ticketsFilter.sort(
      (a, b) =>
        a.price +
        a.segments[0].duration +
        a.segments[1].duration -
        (b.price + b.segments[0].duration + b.segments[1].duration),
    );
  }

  return (
    <div>
      {ticketsFilter.length !== 0 ? (
        ticketsFilter.slice(0, showTickets).map((ticket) => {
          id += "a";
          return <Ticket key={id} ticket={ticket} />;
        })
      ) : (
        <h3 style={{ marginLeft: 15 , fontSize: 15}}>Рейсов, подходящих под заданные фильтры, не найдено</h3>
      )}
      {ticketsFilter.length !== 0 ? <Button /> : null}
    </div>
  );
}

export default ListTickets;