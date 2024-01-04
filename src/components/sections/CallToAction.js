import React from 'react';
import Flex from '../UI/Flex';
import { colors, fonts } from '../UI/styles';
import MarginBox from '../UI/MarginBox';
import Text from '../UI/Text';
import Box from '../UI/Box';
import Button from '../UI/Button';
import RestaurantFood from '../../assets/restauranfood.jpg';
import styled from 'styled-components';

const Simg = styled.img`
  margin-top: 50px;
  border-radius: 25px;
  width: 180px;

  @media (min-width: 1200px) {
    position: absolute;
    right: 250px;
    width: 300px;
  }
`;

const CallToAction = () => {
  return (
    <Flex color={colors.primary_green}>
      <MarginBox mt={50} ml={250}>
        <Flex direction={'column'}>
          <Text type={fonts.display_title} color={colors.primary_yellow}>
            Little Lemon
          </Text>
          <Text type={fonts.subtitle} color={colors.white}>
            Chicago
          </Text>
          <MarginBox mt={30} />
          <Box width={400}>
            <Text type={fonts.paragraph_text} color={colors.white}>
              We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>
          </Box>
          <MarginBox mt={50} />
          <Button>Reserve a table</Button>
          <MarginBox mt={50} />
        </Flex>
      </MarginBox>
      <Simg src={RestaurantFood} alt={'restaurant_food'} width={300} />
    </Flex>
  );
};

export default CallToAction;