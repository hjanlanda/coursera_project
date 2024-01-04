import React from 'react';
import MarginBox from '../UI/MarginBox';
import Text from '../UI/Text';
import { fonts } from '../UI/styles';
import Flex from '../UI/Flex';
import Button from '../UI/Button';
import SpecialsCard from '../SpecialsCard';
import styled from 'styled-components';
import bruchetta from '../../assets/bruchetta.svg';
import salad from '../../assets/greek_salad.jpg';
import desert from '../../assets/lemon_dessert.jpg';
import Box from '../UI/Box';

const SpecialsContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Specials = () => {
  const specials = [
    {
      key: '1',
      title: 'Greek salad',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.',
      price: '12.99',
      img: salad,
    },
    {
      key: '2',
      title: 'Bruchetta',
      description:
        'Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '5.99',
      img: bruchetta,
    },
    {
      key: '3',
      title: 'Lemon desert',
      description:
        'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '5.00',
      img: desert,
    },
  ];

  return (
    <Box>
      <Flex>
        <Flex />
        <Text type={fonts.display_title}>This weeks specials</Text>
        <Flex direction={'row-reverse'} align={'center'}>
          <Button>Online menu</Button>
        </Flex>
        <Flex />
      </Flex>
      <MarginBox mt={30} />
      <Flex>
        <Flex />
        <Flex size={5} justify={'center'}>
          <SpecialsContainer>
            {specials.map((special) => {
              return (
                <SpecialsCard
                  key={special.key}
                  title={special.title}
                  description={special.description}
                  img={special.img}
                  price={special.price}
                />
              );
            })}
          </SpecialsContainer>
        </Flex>
        <Flex />
      </Flex>
    </Box>
  );
};

export default Specials;
