import styled from 'styled-components';

export const Container = styled.div`
  min-height: 54px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  z-index: 10;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 1200px) {
    display: none;
  }

  li {
    font-weight: 500;
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
    margin-right: 10px;
    flex-wrap: nowrap;
    font-size: 1.4rem;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MobileMenu = styled.button`
  background-color: rgba(0, 0, 0, 0.05);
  border: 0px rgb(24, 27, 33);
  backdrop-filter: blur(16);
  padding: 4px 8px;
  border-radius: 12px;
  display: none;

  span {
    font-size: 14px;
    font-weight: normal;
  }

  @media (max-width: 1200px) {
    display: inline-block;
  }
`;

export const MobileNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const CustomClose = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
