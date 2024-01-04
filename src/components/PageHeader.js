import React from 'react';
import { colors, fonts } from './UI/styles';
import MarginBox from './UI/MarginBox';
import Flex from './UI/Flex';
import Text from './UI/Text';
import Box from './UI/Box';

const PageHeader = ({ title, description }) => {
  return (
    <Flex color={colors.primary_green}>
      <MarginBox mt={50} ml={250}>
        <Flex direction={'column'}>
          <Text type={fonts.display_title} color={colors.primary_yellow}>
            {title}
          </Text>
          <Box width={700}>
            <Text type={fonts.subtitle} color={colors.white}>
              {description}
            </Text>
          </Box>
          <MarginBox mt={50} />
        </Flex>
      </MarginBox>
    </Flex>
  );
};

export default PageHeader;
