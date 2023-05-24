import styled from '@emotion/styled';
import locationPageChooseLocationBG_1 from '../../../../shared/images/locationPageChooseLocationBG_1.png';
import locationPageChooseLocationBG_2 from '../../../../shared/images/locationPageChooseLocationBG_2.png';
import locationPageChooseLocationBG_3 from '../../../../shared/images/locationPageChooseLocationBG_3.png';

export const StyledDiv = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  width: 280px;
  height: 400px;

  border: 3px solid ${({ theme }) => theme.paginationAccent};

  background: ${({ theme }) => theme.bgCharacterCard};

  transition: transform 250ms ${({ theme }) => theme.cubic};

  &::before {
    content: '';
    position: absolute;
    top: -2%;
    right: -2.5%;
    transform: rotate(-90deg);
    /* z-index: -1; */

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2%;
    left: -2.5%;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
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

  width: 250px;
  height: 250px;
  border-radius: 5px;
`;

export const StyledH3 = styled.h3`
  position: relative;
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  background-color: #a3a3a3;
  border-radius: 5px;
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
