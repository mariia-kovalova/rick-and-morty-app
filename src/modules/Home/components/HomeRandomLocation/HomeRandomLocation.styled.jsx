import styled from '@emotion/styled';
import locationPageChooseLocationBG_1 from '../../../../shared/images/locationPageChooseLocationBG_1.png';
import locationPageChooseLocationBG_2 from '../../../../shared/images/locationPageChooseLocationBG_2.png';
import locationPageChooseLocationBG_3 from '../../../../shared/images/locationPageChooseLocationBG_3.png';
import { Link } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { keyframes } from '@emotion/react';

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

export const StyledLink = styled(Link)`
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

  &.show {
    animation: ${flipScale} 0.5s linear both;
  }
`;

export const StyledDiv = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

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

  border: 3px solid ${({ theme }) => theme.crossThemeAccent};
  border-radius: 4px;

  background: ${({ theme }) => theme.bgCharacterCard};

  transition: transform 250ms ${({ theme }) => theme.cubic};

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    transform: rotate(-90deg);
    /* z-index: -1; */

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: -5px;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LocationCard = styled.div`
  position: relative;

  flex: 1;
  height: 100%;

  /* border-right: solid 3px ${({ theme }) => theme.accentTransparent}; */

  &.location-card1 {
    background-image: url(${locationPageChooseLocationBG_1});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.location-card2 {
    background-image: url(${locationPageChooseLocationBG_2});
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.location-card3 {
    background-image: url(${locationPageChooseLocationBG_3});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 75px;

  border-bottom: solid 1px ${({ theme }) => theme.accentTransparent};

  font-size: 30px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.accentTransparent};
`;

export const LocationCardDetails = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  background-color: ${({ theme }) => theme.bgPrimaryTransparent};

  transition: transform 300ms ${({ theme }) => theme.cubic},
    background-color 300ms ${({ theme }) => theme.cubic};

  width: 120px;
  height: 150px;

  border-radius: 5px;

  @media screen and (min-width: ${tablet}) {
    width: 195px;
    height: 250px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 250px;
    height: 250px;
  }
`;

export const StyledH3 = styled.h3`
  position: relative;
  margin-top: 23px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  background-color: #a3a3a3;
  border-radius: 5px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 30px;
    font-size: 22px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 50px;
    font-size: 22px;
  }
`;

export const Detail = styled.p`
  padding: 4px;

  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  @media screen and (min-width: ${tablet}) {
    padding: 10px;

    font-size: 18px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 18px;
  }

  & span {
    display: inline;
    font-weight: 900;
    font-size: 10px;
    line-height: 1;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.characterCardTextAccent};

    @media screen and (min-width: ${tablet}) {
      font-size: 20px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 20px;
    }
  }
`;
