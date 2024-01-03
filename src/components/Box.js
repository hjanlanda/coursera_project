import React from 'react';
import styled from 'styled-components';

const SBox = styled.div`
  ${(props) => (props.width ? `width: ${props.width}px` : '')};
  ${(props) => (props.height ? `height: ${props.height}px` : '')};
  background-color: ${(props) => props.color};
`;

const Box = ({ children, width, height, color }) => {
  return (
    <SBox width={width} height={height} color={color}>
      {children}
    </SBox>
  );
};

export default Box;
