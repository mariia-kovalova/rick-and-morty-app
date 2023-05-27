import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';

const flipScale = keyframes`
  0% {
    -webkit-transform: scale(1) rotateX(0);
            transform: scale(1) rotateX(0);
  }
  50% {
    -webkit-transform: scale(1.1) rotateX(-180deg);
            transform: scale(1.1) rotateX(-180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateX(-360deg);
            transform: scale(1) rotateX(-360deg);
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 200px;

  @media screen and (min-width: ${tablet}) {
    width: 206px;
    height: 296px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 280px;
    height: 400px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;

  color: inherit;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &.show {
    animation: ${flipScale} 0.5s linear both;
  }
`;

export const CharacterCardWrap = styled.div`
  padding: 20px 5px 5px 5px;

  width: 140px;
  height: 200px;

  background: ${({ theme }) => theme.bgCharacterCard};
  border: 3px solid ${({ theme }) => theme.crossThemeAccent};
  border-radius: 4px;

  @media screen and (min-width: ${tablet}) {
    padding: 30px 10px 10px 10px;
    width: 206px;
    height: 296px;
  }

  @media screen and (min-width: ${desktop}) {
    padding: 60px 20px 20px 20px;

    width: 280px;
    height: 400px;
  }
`;

export const Img = styled.img`
  width: 117px;
  height: 117px;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 6px;

  @media screen and (min-width: ${tablet}) {
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const MainInfo = styled.div`
  position: relative;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 20px;
  }
`;

export const CardDecoration = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: fit-content;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -1%;
    right: -1.5%;
    transform: rotate(-90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1%;
    left: -1.5%;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }
`;
