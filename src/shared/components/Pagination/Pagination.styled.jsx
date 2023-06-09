import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: ${tablet}) {
    gap: 16px;
  }
`;

export const IconArrowButton = styled.button`
  position: relative;
  padding: 12px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgPrimary};
  transition: backgrond-color 250ms ${({ theme }) => theme.cubic};

  @media screen and (min-width: ${tablet}) {
    padding: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgcHoverFocus};
  }

  &:disabled:hover,
  &:disabled:focus {
    cursor: auto;
    background-color: transparent;
  }
`;

export const LabelButton = styled.button`
  position: relative;
  z-index: 1;

  background-color: transparent;
  color: ${({ currentPage }) => (currentPage ? '#fff' : 'inherit')};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.bgPrimary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    padding: 16px;

    border-radius: 50%;
    background-color: ${({ theme, currentPage }) =>
      currentPage ? theme.crossThemeAccent : theme.bgPrimary};
    transition: backgrond-color 250ms ${({ theme }) => theme.cubic};
  }

  &:hover::before,
  &:focus::before {
    background-color: ${({ theme }) => theme.bgcHoverFocus};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1px;

  fill: transparent;
  stroke: ${({ theme }) => theme.crossThemeAccent};
  transition: stroke 100ms ${({ theme }) => theme.cubic};

  ${IconArrowButton}:disabled & {
    stroke: ${({ theme }) => theme.bgcHoverFocus};
  }

  ${IconArrowButton}:hover &, ${IconArrowButton}:focus  & {
    stroke: ${({ theme }) => theme.bgPrimary};
  }

  ${IconArrowButton}:disabled:hover & ,${IconArrowButton}:disabled:focus {
    stroke: ${({ theme }) => theme.bgcHoverFocus};
  }
`;
