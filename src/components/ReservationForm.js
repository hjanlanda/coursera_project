import React, { useEffect, useState } from 'react';
import Button from './UI/Button';

const ReservationForm = ({ reservations, addReservation }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guestCount: 1,
    occasion: 'Birthday',
  });
  const getAvailableTimes = () => {
    const reservedTimes = reservations.map((res) => res.time);
    return availableTimes.filter((time) => !reservedTimes.includes(time));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //submitAPI cant call... provided url returns 404
    addReservation(reservationData);
  };

  useEffect(() => {
    // fetch(serverURL).then((res) => {
    //'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
    // fetchAPI('');
    //   cant use, url returns 404
    // });

    //just something to simulate different times when selecting different date
    if (reservationData.date.length > 0) {
      const randomTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const returnTimes = randomTimes.filter(() => Math.random() > 0.5);
      setAvailableTimes(returnTimes);
    }
  }, [reservationData.date]);

  return (
    <form
      style={{ display: 'grid', minWidth: '150px', maxWidth: '200px', gap: '20px' }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationData.date}
        onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={reservationData.time}
        onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
        disabled={!(availableTimes.length > 0)}
      >
        {getAvailableTimes().map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={reservationData.guestCount}
        onChange={(e) => setReservationData({ ...reservationData, guestCount: Number(e.target.value) })}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={reservationData.occasion}
        onChange={(e) => setReservationData({ ...reservationData, occasion: e.target.value })}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button type={'submit'}>Book now</Button>
    </form>
  );
};

export default ReservationForm;
