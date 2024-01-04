import React from 'react';
import Flex from './UI/Flex';
import Text from './UI/Text';
import MarginBox from './UI/MarginBox';
import { colors, fonts } from './UI/styles';
import styled from 'styled-components';

const SCard = styled.div`
  width: 300px;
  background-color: ${colors.secondary_grey};
  border-radius: 15px;
  box-shadow: 0 0 10px grey;
`;

const SpecialsCard = ({ title, description, price, img }) => {
  return (
    <SCard>
      <img alt={title} src={img} width={300} height={200} style={{ borderRadius: '15px' }} />
      <MarginBox mt={15} ml={15} mr={15} mb={15}>
        <Flex direction={'column'}>
          <Flex>
            <Text type={fonts.section_title}>{title}</Text>
            <Flex direction={'row-reverse'}>
              <Text type={fonts.section_title} color={colors.secondary_salmon}>
                {`$${price}`}
              </Text>
            </Flex>
          </Flex>
          <MarginBox mt={30} />
          <Text type={fonts.paragraph_text}>{description}</Text>
          <MarginBox mt={30} />
          <Flex direction={'column-reverse'}>
            <Text type={fonts.section_title}>Order a delivery</Text>
          </Flex>
        </Flex>
      </MarginBox>
    </SCard>
  );
};

export default SpecialsCard;
