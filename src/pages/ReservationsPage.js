import React, { useState } from 'react';
import Flex from '../components/UI/Flex';
import { colors, fonts } from '../components/UI/styles';
import Text from '../components/UI/Text';
import MarginBox from '../components/UI/MarginBox';
import Box from '../components/UI/Box';
import ReservationForm from '../components/ReservationForm';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const addReservation = (res) => {
    setReservations([...reservations, res]);
  };
  return (
    <Flex direction={'column'}>
      <Flex color={colors.primary_green}>
        <MarginBox mt={50} ml={250}>
          <Flex direction={'column'}>
            <Text type={fonts.display_title} color={colors.primary_yellow}>
              Reservations
            </Text>
            <Box width={700}>
              <Text type={fonts.subtitle} color={colors.white}>
                Here you can reserve your table for your dinners, dates, meetings..
              </Text>
            </Box>
            <MarginBox mt={50} />
          </Flex>
        </MarginBox>
      </Flex>
      <Flex direction={'column'} align={'center'}>
        <ReservationForm reservations={reservations} addReservation={addReservation} />
      </Flex>
    </Flex>
  );
};

export default ReservationsPage;
