import React from 'react';
import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  Wrap,
} from './Section.styles';
// import { modelS } from '../data/data';
import { FaChevronDown } from 'react-icons/fa';

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow>
          <FaChevronDown />
        </DownArrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;
