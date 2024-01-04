import React, { useEffect, useState } from 'react';
import Button from './UI/Button';
import Text from './UI/Text';
import styled from 'styled-components';

const Sinput = styled.input`
  border-color: ${(props) => (props.invalid ? 'red' : 'inherit')};
`;
const Sselect = styled.select`
  border-color: ${(props) => (props.invalid ? 'red' : 'inherit')};
`;

const ReservationForm = ({ reservations, addReservation }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservationData, setReservationData] = useState({
    date: { value: '', touched: false, valid: false },
    time: { value: '', touched: false, valid: false },
    guestCount: { value: 1, touched: false, valid: true },
    occasion: { value: 'Birthday', touched: false, valid: true },
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
    if (reservationData.date.value.length > 0) {
      const randomTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const returnTimes = randomTimes.filter(() => Math.random() > 0.5);
      setAvailableTimes(returnTimes);
    }
  }, [reservationData.date.value]);

  return (
    <form
      style={{ display: 'grid', minWidth: '150px', maxWidth: '200px', gap: '20px' }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="res-date">Choose date</label>
      <Sinput
        invalid={reservationData.date.touched && !reservationData.date.valid}
        type="date"
        id="res-date"
        value={reservationData.date.value}
        onChange={(e) =>
          setReservationData({
            ...reservationData,
            date: {
              value: e.target.value,
              valid: e.target.value.length > 0,
              touched: true,
            },
          })
        }
        onBlur={() => {
          setReservationData({
            ...reservationData,
            date: {
              ...reservationData.date,
              touched: true,
            },
          });
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <Sselect
        id="res-time "
        invalid={reservationData.time.touched && !reservationData.time.valid}
        value={reservationData.time.value}
        onChange={(e) =>
          setReservationData({
            ...reservationData,
            time: {
              value: e.target.value,
              valid: e.target.value.length > 0,
              touched: true,
            },
          })
        }
        onBlur={() => {
          setReservationData({
            ...reservationData,
            time: {
              ...reservationData.time,
              touched: true,
            },
          });
        }}
        disabled={!(availableTimes.length > 0)}
      >
        <option value={''} disabled selected>
          Select time
        </option>
        {getAvailableTimes().map((time) => (
          <option key={time}>{time}</option>
        ))}
      </Sselect>
      <label htmlFor="guests">Number of guests</label>
      <Sinput
        invalid={reservationData.guestCount.touched && !reservationData.guestCount.valid}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={reservationData.guestCount.value}
        onChange={(e) =>
          setReservationData({
            ...reservationData,
            guestCount: {
              value: Number(e.target.value),
              valid: Number(e.target.value) > 0 && Number(e.target.value) < 10,
              touched: true,
            },
          })
        }
        onBlur={() => {
          setReservationData({
            ...reservationData,
            guestCount: {
              ...reservationData.guestCount,
              touched: true,
            },
          });
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={reservationData.occasion.value}
        onChange={(e) =>
          setReservationData({
            ...reservationData,
            occasion: {
              value: e.target.value,
              valid: false,
              touched: true,
            },
          })
        }
        onBlur={() => {
          setReservationData({
            ...reservationData,
            date: {
              ...reservationData.date,
              touched: true,
            },
          });
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button type={'submit'} disabled={Object.values(reservationData).some((d) => !d.valid)}>
        Book now
      </Button>
    </form>
  );
};

export default ReservationForm;
