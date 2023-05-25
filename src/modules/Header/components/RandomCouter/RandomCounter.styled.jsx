import styled from '@emotion/styled/macro';
import { desktop } from 'shared/constants/deviceSizes';
import { InfoCircle } from 'shared/styles/components/InfoCircle.styled';

export const Button = styled.button`
  position: relative;
  padding: 0px;

  color: transparent;
  background-color: transparent;
  border: none;
`;

export const Icon = styled.svg`
  fill: ${({ theme }) => theme.accent};
  height: 24px;
  width: 24px;

  transition: transform 250ms ${({ theme }) => theme.cubic};

  ${Button}:hover &,
  ${Button}:focus & {
    transform: scale(1.05);
  }

  @media (min-width: ${desktop}) {
    height: 32px;
    width: 32px;
  }
`;

export const InfoCircleStyled = styled(InfoCircle)`
  position: absolute;
  top: -12px;
  left: 22px;

  transition: transform 250ms ${({ theme }) => theme.cubic};

  ${Button}:hover &,
  ${Button}:focus & {
    transform: scale(1.05);
  }

  @media (min-width: ${desktop}) {
    top: -10px;
    left: 29px;
  }
`;
