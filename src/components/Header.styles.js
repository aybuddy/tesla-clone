import styled from 'styled-components';

export const Container = styled.div`
  min-height: 54px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  li {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
    font-size: 1.4rem;
  }
`;

export const RightMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
    font-size: 1.4rem;
  }
`;

export const MobileMenu = styled.div``;
