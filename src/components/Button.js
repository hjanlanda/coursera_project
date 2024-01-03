import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { colors, fonts } from '../styles';
import Box from './Box';

const SButton = styled.button`
  background-color: ${colors.primary_yellow};
  border: none;
  height: 40px;
  border-radius: 15px;
  padding: 0 15px 0 15px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.secondary_salmon};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.secondary_grey};
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <Box>
      <SButton onClick={onClick} disabled={disabled}>
        <Text type={fonts.section_title} color={colors.black}>
          {children}
        </Text>
      </SButton>
    </Box>
  );
};

export default Button;
