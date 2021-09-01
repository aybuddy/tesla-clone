import React from 'react';
import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  SoloButton,
  Wrap,
} from './Section.styles';
import { FaChevronDown } from 'react-icons/fa';

const Section = ({ heading, description, leftBtn, rightBtn, bgImg }) => {
  return (
    <Wrap bgImg={bgImg}>
      <ItemText>
        <h1>{heading}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        {!rightBtn ? (
          <SoloButton>{leftBtn}</SoloButton>
        ) : (
          <>
            <ButtonGroup>
              <LeftButton>{leftBtn}</LeftButton>
              <RightButton>{rightBtn}</RightButton>
            </ButtonGroup>
          </>
        )}

        <DownArrow>
          <FaChevronDown />
        </DownArrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;
