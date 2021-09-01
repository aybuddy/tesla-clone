import React from 'react';
import { Container, Menu, MobileMenu, RightMenu } from './Header.styles';
import Logo from '../data/tesla.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <img src={Logo} alt='' />
      </Link>

      <Menu>
        <li>
          <Link to='/'>Model S</Link>
        </li>
        <li>
          <Link to='/'>Model 3</Link>
        </li>
        <li>
          <Link to='/'>Model X</Link>
        </li>
        <li>
          <Link to='/'>Model Y</Link>
        </li>
        <li>
          <Link to='/'>Solar Roof</Link>
        </li>
        <li>
          <Link to='/'>Solar Panels</Link>
        </li>
      </Menu>

      <RightMenu>
        <li>
          <Link to='/'>Shop</Link>
        </li>
        <li>
          <Link to='/'>Account</Link>
        </li>
        <li>
          <Link to='/'>Menu</Link>
        </li>
        <MobileMenu>
          <Link>Menu</Link>
        </MobileMenu>
      </RightMenu>
    </Container>
  );
};

export default Header;
