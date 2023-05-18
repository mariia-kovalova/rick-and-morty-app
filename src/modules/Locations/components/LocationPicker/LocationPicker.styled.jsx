import styled from '@emotion/styled';
import { desktop, mobile, tablet } from 'shared/constants/deviceSizes';

import locationPageChooseLocationBG_1 from '../../../../shared/images/locationPageChooseLocationBG_1.png';
import locationPageChooseLocationBG_2 from '../../../../shared/images/locationPageChooseLocationBG_2.png';
import locationPageChooseLocationBG_3 from '../../../../shared/images/locationPageChooseLocationBG_3.png';

export const StyledDiv = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  /* height: 330px;
  width: 1000px; */

  @media screen and (min-width: ${mobile}) {
    flex-direction: column-reverse;
    width: 255px;
    height: 605px;
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    width: 700px;
    height: 350px;
  }

  @media screen and (min-width: ${desktop}) {
    height: 330px;
    width: 1000px;
  }

  border: 3px solid ${({ theme }) => theme.paginationAccent};

  background: ${({ theme }) => theme.bgCharacterCard};
`;

export const LocationCard = styled.div`
  position: relative;

  flex: 1;
  height: 100%;

  border-right: solid 3px ${({ theme }) => theme.accentTransparent};

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
  &::before {
    display: none;

    @media screen and (min-width: ${tablet}) {
      display: block;
      content: '';
      position: absolute;
      top: -21px;
      left: -20.6px;
      transform: rotate(45deg);

      width: 40px;
      height: 40px;

      background-color: ${({ theme }) => theme.bgPrimary};
      border-right: 3px solid ${({ theme }) => theme.paginationAccent};
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: -7px;
    transform: rotate(90deg);
    /* z-index: -1; */

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 6px 6px 0;
    background-color: transparent;
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

  @media screen and (min-width: ${mobile}) {
    width: 250px;
    height: 250px;
    &:hover {
      background-color: ${({ theme }) => theme.bgPrimary};
    }
  }

  @media screen and (min-width: ${tablet}) {
    border-radius: 10px;

    &:hover {
      transform: scale(1.02);
      background-color: ${({ theme }) => theme.bgPrimary};
    }
  }

  @media screen and (min-width: ${desktop}) {
    width: 400px;
    height: 220px;
  }
`;

export const StyledH3 = styled.h3`
  position: relative;
  top: -15px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  width: 400px;
  height: 70px;

  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  background-color: #a3a3a3;
  border-radius: 5px;

  @media screen and (min-width: ${mobile}) {
    width: 250px;
  }
`;

export const Detail = styled.p`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  & span {
    display: inline;
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.characterCardTextAccent};
  }
`;

export const LocationChoose = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -21px;
    right: -20.6px;
    transform: rotate(-135deg);

    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
    border-right: 3px solid ${({ theme }) => theme.paginationAccent};
  }

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    right: -7px;
    transform: rotate(-90deg);

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 6px 6px 0;
    background-color: transparent;
  }
`;

export const StyledButton = styled.button`
  height: 70px;

  font-size: 20px;

  border-radius: 5px;

  @media screen and (min-width: ${mobile}) {
    width: 200px;

    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;
    margin-top: 0;
    width: 250px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 24px;
`;
