import styled from '@emotion/styled/macro';
import { up } from 'shared/constants/tootipPosition';

export const Trigger = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  position: absolute;
  top: ${({ position }) => (position === up ? '-45px' : '40px')};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  height: fit-content;
  width: fit-content;

  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 250ms ${({ theme }) => theme.cubic};

  ${Trigger}:hover & {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${({ position }) =>
      position === up ? '6px 6px 0 6px' : '0'};
    border-color: #333 transparent transparent transparent;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
