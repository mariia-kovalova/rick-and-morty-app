import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { desktop, tablet } from 'shared/constants/deviceSizes';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  padding: 14px 28px;
  width: 100%;
  height: 60px;

  background-color: ${({ theme }) => theme.paginationAccent};
  border-radius: 4px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.bgPrimary};
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.secondary};
  }

  clip-path: polygon(
    10% 0%,
    100% 0%,
    100% 30%,
    100% 60%,
    90% 100%,
    0% 100%,
    0% 70%,
    0% 40%
  );

  @media (min-width: ${tablet}) {
    padding: 16px 23px;
    font-size: 18px;
  }

  @media (min-width: ${desktop}) {
    width: 280px;
    font-size: 20px;
  }
`;

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.bgPrimary};
  transition: fill 250ms ${({ theme }) => theme.cubic};

  ${Button}:hover & {
    animation: ${rotate} 0.7s ${({ theme }) => theme.cubic} both;
    fill: ${({ theme }) => theme.secondary};
  }
`;
