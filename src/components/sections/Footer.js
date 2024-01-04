import React from 'react';
import styled from 'styled-components';
import { colors } from '../UI/styles';

const Sfooter = styled.footer`
  height: 50px;
  background-color: ${colors.secondary_grey};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return <Sfooter>@Jan Landa copyright</Sfooter>;
};

export default Footer;
