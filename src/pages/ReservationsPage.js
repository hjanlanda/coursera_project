import React, { useState } from 'react';
import Flex from '../components/UI/Flex';
import ReservationForm from '../components/ReservationForm';
import PageHeader from '../components/PageHeader';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const addReservation = (res) => {
    setReservations([...reservations, res]);
  };
  return (
    <Flex direction={'column'}>
      <PageHeader
        title={'Reservations'}
        description={'Here you can reserve your table for your dinners, dates, meetings..'}
      />
      <Flex direction={'column'} align={'center'}>
        <ReservationForm reservations={reservations} addReservation={addReservation} />
      </Flex>
    </Flex>
  );
};

export default ReservationsPage;
