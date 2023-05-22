import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { BaseButton } from 'shared/styles/components/BaseButton.styled';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Button = styled(BaseButton)`
  position: relative;
  padding: 14px 28px;
  margin: 0 auto;
  width: 230px;
  height: 45px;

  @media (min-width: ${tablet}) {
    padding: 16px 23px;
    width: 280px;
    height: 60px;
    font-size: 18px;
  }

  @media (min-width: ${desktop}) {
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
