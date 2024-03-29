import React from 'react';
import styled from 'styled-components';

const SFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  background-color: ${(props) => props.color};
  flex-grow: ${(props) => (props.size ? props.size : 1)};
  align-items: ${(props) => (props.align ? props.align : 'inherit')};
  justify-content: ${(props) => (props.justify ? props.justify : 'inherit')};
  gap: ${(props) => props.gap}px;
`;

const Flex = ({ children, direction, color, size, align, justify, gap }) => {
  return (
    <SFlex direction={direction} color={color} size={size} align={align} justify={justify} gap={gap}>
      {children}
    </SFlex>
  );
};

export default Flex;
