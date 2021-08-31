import styled from 'styled-components';
// import { modelS } from '../data/data';
import { FaChevronDown } from 'react-icons/fa';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop');
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

export const RightButton = styled(LeftButton)``;

export const DownArrow = styled.div`
  text-align: center;
  margin-top: 20px;
  height: 40px;
  font-size: 21px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export const Buttons = styled.div``;
