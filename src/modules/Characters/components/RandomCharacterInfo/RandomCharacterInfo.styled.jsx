import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { alive, dead, unknown } from 'shared/constants/characterStatus';
import { desktop } from 'shared/constants/deviceSizes';

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

    width: 205px;
    height: 205px;

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

    @media screen and (min-width: ${desktop}) {
      width: 192.5px;
      height: 191.5px;
    }
  }
`;

export const Number = styled.div`
  position: absolute;
  top: 4%;
  right: 7%;
  z-index: 1;

  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
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

const getStatus = ({ theme, marker }) => {
  switch (marker) {
    case alive:
      return theme.alive;
    case dead:
      return theme.dead;
    case unknown:
      return theme.unknown;
    default:
      return theme.unknown;
  }
};

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
    animation: ${beam} 1.5s ease-in-out both;
  }
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;

  @media screen and (min-width: ${desktop}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const FullInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: ${desktop}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const Label = styled.p`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.characterCardTextAccent};
`;
