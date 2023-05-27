import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const Svg = styled.svg`
  width: 20px;
  height: 20px;

  stroke: ${({ theme }) => theme.crossThemeAccent};
  fill: ${({ theme }) => theme.crossThemeAccent};
  transition: trasform 250ms ${({ theme }) => theme.cubic};

  @media screen and (min-width: ${tablet}) {
    width: 30px;
    height: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 3px 6px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-decoration: none;
  color: ${({ theme }) => theme.crossThemeAccent};

  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.crossThemeAccent};
  border-radius: 5px;
  transition: clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  @media screen and (min-width: ${tablet}) {
    padding: 8px 16px;
    font-size: 18px;
  }

  @media screen and (min-width: ${desktop}) {
    padding: 10px 20px;
    font-size: 22px;
  }

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
    background-color: ${({ theme }) => theme.crossThemeAccent};

    & ${Svg} {
      stroke: ${({ theme }) => theme.bgPrimary};
      fill: ${({ theme }) => theme.bgPrimary};
    }

    &:hover {
      color: ${({ theme }) => theme.bgPrimary};
      background-color: ${({ theme }) => theme.crossThemeAccent};
      border-color: ${({ theme }) => theme.crossThemeAccent};

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
