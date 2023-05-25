import styled from '@emotion/styled';
import { desktop, mobile } from 'shared/constants/deviceSizes';
import { getHeartColor } from 'shared/utils/getHeartColor';

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

export const HeartWrap = styled.div`
  position: absolute;
  top: -14px;
  right: 0px;

  width: fit-content;
  height: fit-content;

  @media screen and (min-width: ${desktop}) {
    top: 3px;
    right: 0px;
  }

  & svg {
    stroke: ${getHeartColor};
    fill: ${getHeartColor};
  }
`;
