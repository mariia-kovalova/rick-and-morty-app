import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  padding-left: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};

  :hover,
  :focus {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);

  padding: 1px;

  fill: transparent;
  stroke: ${({ theme }) => theme.textPrimary};
  transition: stroke 100ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    stroke: ${({ theme }) => theme.accent};
  }
`;
