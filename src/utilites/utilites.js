export const travelTime = (segment) => {
    const data = new Date(segment.date);
    return `${data.getHours().toString().length < 2 ? `0${data.getHours()}` : data.getHours()}:${
      data.getMinutes().toString().length < 2 ? `0${data.getMinutes()}` : data.getMinutes()
    }`;
  };
  
  export const arrivalTime = (segment) => {
    const data = new Date(segment.date);
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const hoursDuration = Math.floor(segment.duration / 60) || 0;
    const minutesDuration = segment.duration % 60 || 0;
    let arrivalHours = hours + hoursDuration;
    let arrivalMinutes = minutes + minutesDuration;
    if (arrivalMinutes > 60) {
      arrivalMinutes -= 60;
      arrivalHours += 1;
    }
    if (arrivalHours >= 24) {
      arrivalHours -= 24;
    }
    return `${arrivalHours.toString().length < 2 ? `0${arrivalHours}` : arrivalHours}:${
      arrivalMinutes.toString().length < 2 ? `0${arrivalMinutes}` : arrivalMinutes
    }`;
  };
  
  export const duration = (segment) => {
    const hours = Math.floor(segment.duration / 60) || 0;
    const minutes = segment.duration % 60 || 0;
    return `${hours}ч : ${minutes}м`;
  };
  
  export const transfers = (segment) => {
    let transfersText = '';
    if (segment.stops.length === 0) transfersText = 'без пересадок';
    if (segment.stops.length === 1) transfersText = '1 пересадка';
    if (segment.stops.length === 2) transfersText = '2 пересадки';
    if (segment.stops.length === 3) transfersText = '3 пересадки';
    return transfersText;
  };