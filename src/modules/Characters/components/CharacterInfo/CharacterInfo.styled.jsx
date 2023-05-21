import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { tablet } from 'shared/constants/deviceSizes';
import { Number } from 'shared/styles/components/Number.styled';
import { StyledLink } from '../RandomCharacter/RandomCharacter.styled';

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

export const HeartWrap = styled.div`
  position: absolute;
  top: -13%;
  left: 3%;
  z-index: 1;

  width: 30px;
  height: 30px;

  @media screen and (min-width: ${tablet}) {
    top: -10%;
    left: 220%;
  }
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  top: -16%;
  right: 0;
  z-index: 1;

  transition: color 250ms ${({ theme }) => theme.cubic};

  @media screen and (min-width: ${tablet}) {
    top: -12%;
    right: -167%;
  }

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.paginationAccent};
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
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }
`;
