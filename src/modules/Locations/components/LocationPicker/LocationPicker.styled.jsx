import styled from '@emotion/styled';
import { desktop, mobile, tablet } from 'shared/constants/deviceSizes';

import locationPageChooseLocationBG_1 from '../../../../shared/images/locationPageChooseLocationBG_1.png';
import locationPageChooseLocationBG_2 from '../../../../shared/images/locationPageChooseLocationBG_2.png';
import locationPageChooseLocationBG_3 from '../../../../shared/images/locationPageChooseLocationBG_3.png';
import {
  CardDecoration,
  CardWrap,
} from 'shared/styles/components/CardDecoration.styled';

export const LocationsDecor = styled(CardDecoration)`
  @media screen and (min-width: ${mobile}) {
    width: 100%;
    height: 605px;
  }

  @media screen and (min-width: ${tablet}) {
    width: 707px;
    height: 350px;
  }

  @media screen and (min-width: ${desktop}) {
    height: 330px;
    width: 1000px;
  }
`;

export const StyledDiv = styled(CardWrap)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;

  margin: 20px auto 0;

  &.random-location {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  background: ${({ theme }) => theme.bgCharacterCard};
  clip-path: polygon(10% 0, 100% 0, 100% 95.4%, 90% 100%, 0 100%, 0 4.6%);

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    clip-path: polygon(4% 0, 100% 0, 100% 92.3%, 96.3% 100%, 0 100%, 0 8%);
  }

  @media screen and (min-width: ${desktop}) {
    clip-path: polygon(2.8% 0, 100% 0, 100% 91.4%, 97.2% 100%, 0 100%, 0 8.5%);
  }
`;

export const LocationCard = styled.div`
  position: relative;

  flex: 1;
  width: 100%;
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

export const LocationChoose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: ${tablet}) {
    flex-basis: 230px;
  }

  @media screen and (min-width: ${tablet}) {
    flex: 1;
    gap: 20px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 16px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
  }
`;
