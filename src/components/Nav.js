import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { colors, fonts } from '../styles';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const Navigation = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;

  li {
    display: inline-flex;
    margin: 0 5px 0 5px;
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
`;

const Nav = () => {
  const menuItems = [
    {
      label: 'Homepage',
      link: '/',
    },
    {
      label: 'About us',
      link: '/',
    },
    {
      label: 'Menu',
      link: '/menu',
    },
    {
      label: 'Reservations',
      link: '/reservations',
    },
    {
      label: 'Order online',
      link: '/order_online',
    },
    {
      label: 'Login',
      link: '/login',
    },
  ];

  return (
    <Navigation>
      <Logo />
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.label + index}>
            <a href={item.link}>
              <Text type={fonts.section_title} color={colors.primary_green}>
                {item.label}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Nav;
