import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)<{ to: string }>`
  text-decoration: none;
  margin-right: ${({ to }) => (to === '/home' ? '10px' : '')};
`;

const Nav: React.SFC = () => (
  <div>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
);

export default Nav;
