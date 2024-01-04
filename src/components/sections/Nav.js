import React from 'react';
import styled from 'styled-components';
import Text from '../UI/Text';
import { colors, fonts } from '../UI/styles';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

const Navigation = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;

  ul {
    height: 100%;
    padding-top: 25px;
  }
`;

const Sli = styled.li`
  display: inline-flex;
  margin: 0 5px 0 5px;
  height: 100%;
  list-style-type: none;
  background-color: ${(props) => (props.active ? colors.primary_green : 'inherit')};
  padding: 0 5px 0 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  a {
    text-decoration: none;
  }
`;

const Nav = () => {
  const menuItems = [
    {
      label: 'Homepage',
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

  const getIsActive = (link) => {
    return window.location.pathname === link;
  };

  return (
    <Navigation>
      <Logo />
      <ul>
        {menuItems.map((item, index) => (
          <Sli key={item.label + index} active={getIsActive(item.link)}>
            <a href={item.link}>
              <Text type={fonts.section_title} color={getIsActive(item.link) ? colors.white : colors.primary_green}>
                {item.label}
              </Text>
            </a>
          </Sli>
        ))}
      </ul>
    </Navigation>
  );
};

export default Nav;
