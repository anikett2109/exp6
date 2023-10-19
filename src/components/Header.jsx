import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0077B6;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  margin: 0;
`;

const Navigation = styled.nav`
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Aniket</Title>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="/">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/ProjectsPage">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact Me</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
