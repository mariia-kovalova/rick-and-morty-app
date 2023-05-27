import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBarLink = styled(NavLink)`
  color: ${({ theme }) => theme.textPrimary};
`;

export const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledUl = styled.ul`
  position: absolute;
  top: 0;
  left: 10%;
  right: 0;
  bottom: 0;
  z-index: 2000;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 20px;

  padding: 60px;

  font-size: 22px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.bgPrimary};

  & li {
    width: 130px;
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* effects for characters, locations, episodes */
    &:not(:last-child) {
      & a:before {
        position: absolute;
        width: 100%;
        height: 2px;
        right: 0px;
        top: 0px;
        content: '';
        background: ${({ theme }) => theme.accent};
        opacity: 0.3;
        transition: all 0.3s;
      }
      & a:hover:before,
      .active:before {
        height: 100%;
      }
    }

    /* effects for library */
    &:last-child {
      & a:before {
        position: absolute;
        width: 100%;
        height: 2px;
        right: 0px;
        top: 0px;
        content: '';
        background: ${({ theme }) => theme.secondary};
        opacity: 0.3;
        transition: all 0.3s;
      }
      & a:hover:before,
      .active:before {
        height: 100%;
      }
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 2001;

  width: fit-content;
  height: fit-content;

  border: 1px solid transparent;
  background-color: transparent;

  cursor: pointer;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2002;

  transform: translate(-50%, -50%) scale(1);
  padding: 3px;
  border-radius: 50%;

  fill: ${({ theme }) => theme.textPrimary};
  transition: backgrond-color 250ms ${({ theme }) => theme.cubic},
    fill 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgcHoverFocus};
    fill: ${({ theme }) => theme.bgPrimary};
  }
`;
