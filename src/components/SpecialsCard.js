import React from 'react';
import Flex from './Flex';
import Text from './Text';
import MarginBox from './MarginBox';
import { colors, fonts } from '../styles';
import Box from './Box';

const SpecialsCard = ({ title, description, price, img }) => {
  return (
    <Box width={300} color={colors.secondary_grey}>
      <img alt={title} src={img} width={300} height={200} />
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
    </Box>
  );
};

export default SpecialsCard;
