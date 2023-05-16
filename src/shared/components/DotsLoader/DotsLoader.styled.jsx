import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const flashing = keyframes`
 0% {
    background-color: ${({ theme }) => theme.paginationAccent};
  }
  50%, 100% {
    background-color: rgba(152, 128, 255, 0.2);
  }
`;

export const ThreeDots = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.paginationAccent};
  color: ${({ theme }) => theme.paginationAccent};
  animation: ${flashing} 1s infinite alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;

    width: 14px;
    height: 14px;

    background-color: ${({ theme }) => theme.paginationAccent};
    color: ${({ theme }) => theme.paginationAccent};
    border-radius: 50%;
    animation: ${flashing} 1s infinite alternate;
  }

  &::before {
    left: -25px;
    animation-delay: 0s;
  }

  &::after {
    left: 25px;
    animation-delay: 1s;
  }
`;
