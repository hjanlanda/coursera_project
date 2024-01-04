import React from 'react';
import styled from 'styled-components';

const SText = styled.span`
  ${(props) => props.type};
  color: ${(props) => props.color};
`;

const Text = ({ children, type, color }) => {
  return (
    <SText type={type} color={color}>
      {children}
    </SText>
  );
};

export default Text;
