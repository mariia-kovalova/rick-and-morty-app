import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { getStatus } from 'shared/utils/getStatus';

const beam = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

export const Status = styled.div`
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: ${getStatus};

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 18px;
    height: 18px;
    background-color: ${getStatus};
    opacity: 0.5;
    border-radius: 50%;

    animation: ${({ animate }) => (animate ? beam : 'none')} 1.5s ease-in-out
      infinite;
  }
`;
