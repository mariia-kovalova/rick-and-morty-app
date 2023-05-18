import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { Number } from 'shared/styles/components/Number.styled';

const shine = keyframes`
   0% {
    background-position: -5px;
  }
  40%, 100% {
    background-position: 208px;
  }
`;

export const MainInfo = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;

    width: 235px;
    height: 235px;

    background-color: rgba(81, 107, 107, 0.801);
    border: 1px solid ${({ theme }) => theme.paginationAccent};
    border-radius: 4px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 70%
      )
      rgba(255, 255, 255, 0.384);
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: ${shine} 2s ${({ theme }) => theme.cubic} infinite;
  }
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  top: -18%;
  right: 0;
  z-index: 1;

  @media screen and (min-width: ${tablet}) {
    right: -167%;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`;

export const Img = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
  border-radius: 6px;

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;
