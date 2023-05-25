import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const Svg = styled.svg`
  stroke: ${({ theme }) => theme.paginationAccent};
  fill: ${({ theme }) => theme.paginationAccent};
  transition: trasform 250ms ${({ theme }) => theme.cubic};
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 10px 20px;

  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-decoration: none;
  color: ${({ theme }) => theme.paginationAccent};

  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.paginationAccent};
  border-radius: 5px;
  transition: clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  clip-path: polygon(
    12% 0%,
    100% 0%,
    100% 30%,
    100% 60%,
    88% 100%,
    0% 100%,
    0% 70%,
    0% 40%
  );

  &.active {
    color: ${({ theme }) => theme.bgPrimary};
    background-color: ${({ theme }) => theme.paginationAccent};

    & ${Svg} {
      stroke: ${({ theme }) => theme.bgPrimary};
      fill: ${({ theme }) => theme.bgPrimary};
    }

    &:hover {
      color: ${({ theme }) => theme.bgPrimary};
      background-color: ${({ theme }) => theme.paginationAccent};
      border-color: ${({ theme }) => theme.paginationAccent};

      & ${Svg} {
        stroke: ${({ theme }) => theme.bgPrimary};
        fill: ${({ theme }) => theme.bgPrimary};
      }
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover {
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 0%,
      100% 100%,
      88% 100%,
      0% 100%,
      0% 70%,
      0% 0%
    );
    color: ${({ theme }) => theme.characterCardTextAccent};
    background-color: ${({ theme }) => theme.bgPrimary};
    border-color: ${({ theme }) => theme.characterCardTextAccent};

    & ${Svg} {
      stroke: ${({ theme }) => theme.characterCardTextAccent};
      fill: ${({ theme }) => theme.characterCardTextAccent};
    }
  }
`;
