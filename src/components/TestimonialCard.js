import React from 'react';
import { colors, fonts } from './UI/styles';
import styled from 'styled-components';
import Flex from './UI/Flex';
import MarginBox from './UI/MarginBox';
import Text from './UI/Text';

const SCard = styled.div`
  width: 500px;
  height: 180px;
  background-color: ${colors.primary_green};
  border-radius: 25px;
  box-shadow: 0 0 10px grey;
  padding-right: 15px;
`;

const TestimonialCard = ({ t }) => {
  return (
    <SCard>
      <Flex>
        <img alt={'person'} src={t.img} height={180} style={{ borderRadius: '25px' }} />
        <MarginBox mr={30} />
        <Flex direction={'column'}>
          <MarginBox mt={30} />
          <Text type={fonts.section_title} color={colors.white}>
            {t.name}
          </Text>
          <MarginBox mt={15} />
          <Text type={fonts.card_title} color={colors.white}>
            {t.text}
          </Text>
        </Flex>
      </Flex>
    </SCard>
  );
};

export default TestimonialCard;
