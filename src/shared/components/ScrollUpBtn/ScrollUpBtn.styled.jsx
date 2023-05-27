import { keyframes } from '@emotion/css';
import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';

const show = keyframes`
  from {
    opacity: 0;
    pointer-events: none;
  }

  to {
   opacity: 1;
    pointer-events: all;
  }
`;

export const ScrollBtn = styled.div`
  position: fixed;
  right: calc(8px + (24 - 8) * ((100vw - 320px) / (1280 - 320)));
  bottom: calc(8px + (24 - 8) * ((100vw - 320px) / (1280 - 320)));

  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(32px + (64 - 32) * ((100vw - 320px) / (1280 - 320)));
  height: calc(32px + (64 - 32) * ((100vw - 320px) / (1280 - 320)));

  background-color: ${({ theme }) => theme.hightlightTransparent};

  border-radius: 50%;
  transition: background-color 250ms linear;
  animation: ${show} 500ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.hightlight};
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;

  transform: rotate(90deg);
  fill: transparent;
  stroke: ${({ theme }) => theme.bgPrimary};

  @media screen and (min-width: ${tablet}) {
    width: 30px;
    height: 30px;
  }
`;
