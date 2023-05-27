import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const ThemeIcon = styled.svg`
  fill: ${({ theme }) => theme.crossThemeAccent};
  height: 28px;
  width: 28px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    fill 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.characterCardTextAccent};
    transform: scale(1.1);
  }

  @media (min-width: ${tablet}) {
    height: 36px;
    width: 36px;
  }
`;

export const ToggleButton = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  padding: 0px;
`;
