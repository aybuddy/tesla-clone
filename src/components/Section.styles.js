import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImg})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

export const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #393c41;
`;

export const SoloButton = styled(LeftButton)`
  background-color: rgb(23, 25, 32);
  opacity: 1;
`;

export const DownArrow = styled.div`
  text-align: center;
  margin-top: 20px;
  height: 40px;
  font-size: 21px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export const Buttons = styled.div``;
