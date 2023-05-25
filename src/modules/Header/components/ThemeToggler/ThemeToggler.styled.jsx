import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';

export const ThemeIcon = styled.svg`
  fill: ${({ theme }) => theme.crossThemeAccent};
  height: 24px;
  width: 24px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    fill 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.characterCardTextAccent};
    transform: scale(1.1);
  }

  @media (min-width: ${desktop}) {
    height: 32px;
    width: 32px;
  }
`;

export const ToggleButton = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  padding: 0px;
`;
