import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  display: block;

  color: inherit;
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${({ theme }) => theme.characterCardTexHover};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  padding: 1px;

  fill: transparent;
  stroke: ${({ theme }) => theme.textPrimary};
  transition: stroke 100ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    stroke: ${({ theme }) => theme.characterCardTexHover};
  }
`;
