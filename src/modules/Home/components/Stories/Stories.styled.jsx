import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const scale = keyframes`
    100% {
    transform: scale(1);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 30px;

  border-radius: 6px;

  width: 300px;
  height: 600px;

  font-size: 15px;

  @media screen and (min-width: ${tablet}) {
    width: 650px;
    height: 300px;

    font-size: 16px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 900px;
    height: 230px;
  }

  border: 6px dashed ${({ theme }) => theme.paginationAccent};
  background-color: ${({ theme }) => theme.bgPrimaryTransparent};

  line-height: 1.5em;
  letter-spacing: 1px;

  &.startText {
    height: 120px;
    font-size: 16px;

    @media screen and (min-width: ${tablet}) {
      font-size: 28px;
    }
  }

  & span {
    text-align: justify;
    text-justify: inter-character;
    display: inline-block;
    opacity: 0;
    transform: scale(0.5);
    filter: ${fadeIn}(4px);
  }

  &.show {
    transform: scale(0.5);
    animation: ${scale} 1s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }
  & span:nth-of-type(1) {
    animation: ${fadeIn} 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0),
      ${scale} 1s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }
`;
