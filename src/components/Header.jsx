import React, { useState } from 'react';
import {
  Container,
  CustomClose,
  Menu,
  MobileMenu,
  MobileNav,
  RightMenu,
} from './Header.styles';
import Logo from '../data/tesla.svg';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <Link to='/'>
        <img src={Logo} alt='' />
      </Link>

      <Menu>
        {cars &&
          cars?.map((car, idx) => (
            <li key={idx}>
              <Link to='/'>{car}</Link>
            </li>
          ))}
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
      </RightMenu>
      <MobileMenu onClick={() => setIsOpen(true)}>
        <span>Menu</span>
      </MobileMenu>
      <MobileNav show={isOpen}>
        <CustomClose>
          <GrClose onClick={() => setIsOpen(false)} />
        </CustomClose>
        <li>
          <Link to='/'>Existing Inventory</Link>
        </li>
        <li>
          <Link to='/'>Used Inventory</Link>
        </li>
        <li>
          <Link to='/'>Trade-In</Link>
        </li>
        <li>
          <Link to='/'>Test Drive</Link>
        </li>
        <li>
          <Link to='/'>Cybertruck</Link>
        </li>
        <li>
          <Link to='/'>Roadster</Link>
        </li>
        <li>
          <Link to='/'>Semi</Link>
        </li>
        <li>
          <Link to='/'>Charging</Link>
        </li>
        <li>
          <Link to='/'>Powerwall</Link>
        </li>
        <li>
          <Link to='/'>Commercial Energy</Link>
        </li>
        <li>
          <Link to='/'>Utilities</Link>
        </li>
        <li>
          <Link to='/'>Find Us</Link>
        </li>
        <li>
          <Link to='/'>Support</Link>
        </li>
        <li>
          <Link to='/'>Investor Relations</Link>
        </li>
      </MobileNav>
    </Container>
  );
};

export default Header;
