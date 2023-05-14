import styled from '@emotion/styled';
import locationPageChooseLocationBG_1 from '../../shared/images/locationPageChooseLocationBG_1.png';
import locationPageChooseLocationBG_2 from '../../shared/images/locationPageChooseLocationBG_2.png';
import locationPageChooseLocationBG_3 from '../../shared/images/locationPageChooseLocationBG_3.png';

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  height: 300px;
  width: 1000px;
  border: solid 1px ${({ theme }) => theme.primary};
  border-radius: 5px;

  & .location-card1 {
    background-image: url(${locationPageChooseLocationBG_1});
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .location-card2 {
    background-image: url(${locationPageChooseLocationBG_2});
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .location-card3 {
    background-image: url(${locationPageChooseLocationBG_3});
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .location-card {
    flex: 1;
    height: 100%;
    border-right: solid 1px ${({ theme }) => theme.primary};

    & h2 {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 75px;

      border-bottom: solid 1px ${({ theme }) => theme.primary};

      font-size: 30px;
      font-weight: 600;
      background-color: ${({ theme }) => theme.primary};
    }

    & h3 {
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

      background-color: #a3a3a3;
      border-radius: 5px;
    }

    & .location-card__details {
      margin-left: auto;
      margin-right: auto;

      width: 400px;
      /* height: 225px; */

      background-color: ${({ theme }) => theme.bgPrimaryTransparent};
    }
    & p {
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  & .location-choose {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 100%;

    background-color: ${({ theme }) => theme.primary};

    & button {
      width: 250px;
      height: 70px;

      font-size: 20px;
      /* text-transform: uppercase; */

      border-radius: 5px;
    }
  }
`;
