import React from 'react';
import styled from 'styled-components';

const SMarginBox = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;
`;

const MarginBox = ({ children, mt, mr, mb, ml }) => {
  return (
    <SMarginBox mt={mt} mr={mr} mb={mb} ml={ml}>
      {children}
    </SMarginBox>
  );
};

export default MarginBox;
