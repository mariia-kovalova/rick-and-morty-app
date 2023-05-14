import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';

export const ThemeIcon = styled.svg`
  fill: ${({ theme }) => theme.accent};
  height: 24px;
  width: 24px;

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
  margin-right: 16px;
`;
