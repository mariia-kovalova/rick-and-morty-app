import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBarLink = styled(NavLink)`
  color: ${({ theme }) => theme.textPrimary};

  &.active {
    /* font-weight: 600; */
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 22px;
  font-weight: 500;

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
