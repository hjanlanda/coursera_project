import React from 'react';
import Flex from '../UI/Flex';
import { colors } from '../UI/styles';
import styled from 'styled-components';
import TestimonialCard from '../TestimonialCard';
import MarginBox from '../UI/MarginBox';
import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';

const GridContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1650px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Testimonials = () => {
  const testimonialData = [
    {
      name: 'Karlos',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: person1,
    },
    {
      name: 'Mario',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: person2,
    },
    {
      name: 'Adrian',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: person2,
    },
    {
      name: 'Loco',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: person1,
    },
  ];
  return (
    <Flex color={colors.secondary_grey}>
      <Flex />
      <Flex size={5} justify={'center'}>
        <MarginBox mt={50} mb={50}>
          <GridContainer>
            {testimonialData.map((t, index) => (
              <TestimonialCard key={index} t={t} />
            ))}
          </GridContainer>
        </MarginBox>
      </Flex>
      <Flex />
    </Flex>
  );
};

export default Testimonials;
