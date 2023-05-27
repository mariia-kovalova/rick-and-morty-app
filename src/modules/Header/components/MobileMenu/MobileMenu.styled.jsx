import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const MenuIcon = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.crossThemeAccent};
  height: 28px;
  width: 28px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    stroke 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.characterCardTextAccent};
    transform: scale(1.1);
  }

  @media (min-width: ${tablet}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const MenuButton = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  padding: 0px;
`;
