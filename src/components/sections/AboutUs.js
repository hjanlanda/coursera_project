import React from 'react';
import Flex from '../UI/Flex';
import Text from '../UI/Text';
import { colors, fonts } from '../UI/styles';
import Box from '../UI/Box';
import chef from '../../assets/chef.jpg';
import styled from 'styled-components';

const Simg = styled.img`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;

const AboutUs = () => {
  return (
    <Flex>
      <Flex />
      <Flex>
        <Flex direction={'column'} gap={30}>
          <Text type={fonts.display_title} color={colors.primary_green}>
            Little Lemon
          </Text>
          <Text type={fonts.subtitle} color={colors.primary_green}>
            Chicago
          </Text>
          <Box width={600}>
            <Text type={fonts.paragraph_text} color={colors.primary_green}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a tLorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a tLorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a t
            </Text>
          </Box>
        </Flex>
        <Simg alt={'asd'} src={chef} width={300} />
      </Flex>
      <Flex />
    </Flex>
  );
};

export default AboutUs;
