import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop } from 'shared/constants/deviceSizes';

export const NavBarLink = styled(NavLink)`
  color: ${({ theme }) => theme.textPrimary};
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 7px;
  font-size: 18px;
  font-weight: 500;

  @media (min-width: ${desktop}) {
    font-size: 22px;
  }

  & li {
    width: 100px;
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${desktop}) {
      width: 130px;
    }

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
