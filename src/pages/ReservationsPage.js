import React, { useState } from 'react';
import Flex from '../components/UI/Flex';
import ReservationForm from '../components/ReservationForm';
import PageHeader from '../components/PageHeader';
import MarginBox from '../components/UI/MarginBox';
import rf from '../assets/restauranfood.jpg';

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
      <MarginBox mt={30} />
      <Flex>
        <Flex />
        <Flex direction={'column'} align={'center'}>
          <ReservationForm reservations={reservations} addReservation={addReservation} />
        </Flex>
        <img alt={'rf'} src={rf} width={300} />
        <Flex />
      </Flex>
    </Flex>
  );
};

export default ReservationsPage;
