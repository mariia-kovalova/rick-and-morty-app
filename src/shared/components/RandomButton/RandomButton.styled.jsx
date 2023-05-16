import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.bgPrimary};
`;

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
  width: 250px;
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

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover ${Svg} {
    animation: ${rotate} 0.7s ${({ theme }) => theme.cubic} both;
  }

  &::before {
    content: '';
    position: absolute;
    top: -21px;
    left: -20.6px;
    transform: rotate(45deg);

    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -21px;
    right: -20.6px;
    transform: rotate(-135deg);

    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
  }

  @media (min-width: ${tablet}) {
    padding: 16px 23px;
    font-size: 18px;
  }

  @media (min-width: ${desktop}) {
    width: 280px;
    font-size: 20px;
  }
`;
