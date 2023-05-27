import styled from '@emotion/styled';
import { desktop, mobile, tablet } from 'shared/constants/deviceSizes';
import { getHeartColor } from 'shared/utils/getHeartColor';
import { getStatus } from 'shared/utils/getStatus';

export const StyledDiv = styled.div`
  position: relative;

  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover {
    transform: scale(1.02);
  }
`;

export const Status = styled.div`
  position: absolute;
  top: 26%;
  left: 6%;

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
  }
`;

export const ImgWrap = styled.div`
  border-radius: 5px;

  overflow: hidden;

  @media screen and (min-width: ${mobile}) {
    width: 278px;
    height: 278px;
  }

  @media screen and (min-width: ${tablet}) {
    width: 289px;
    height: 289px;
  }
`;

export const Img = styled.img`
  border-radius: 5px;

  transition: ${({ theme }) => theme.cubic} 250ms;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: ${mobile}) {
    position: relative;
  }

  @media screen and (min-width: ${tablet}) {
    position: absolute;
  }

  bottom: 0;
  left: 0;
  right: 0;

  padding: 12px 16px;
  height: 60px;

  border-radius: 0 0 6px 6px;
  background-color: ${({ theme }) => theme.secondaryTransparent};
`;

export const Name = styled.p`
  padding-left: 22px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15px;

  @media screen and (min-width: ${mobile}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }

  & span {
    display: inline;
    margin-left: 7px;

    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.characterCardTextAccent};

    @media screen and (min-width: ${mobile}) {
      font-size: 18px;
    }

    @media screen and (min-width: ${tablet}) {
      font-size: 24px;
    }
  }

  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.25px;

  &.location-card__name {
    font-size: 26px;
    margin-bottom: 30px;
    margin-top: 20px;
    margin-right: 5px;
    color: ${({ theme }) => theme.characterCardTextAccent};
  }
`;

export const Description = styled.div`
  position: relative;
  display: flex;

  @media screen and (min-width: ${mobile}) {
    flex-direction: column;
    height: 530px;
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    height: 289px;
  }
`;

export const Infobox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Number = styled.div`
  position: absolute;
  right: 5%;
  bottom: 7%;
  z-index: 1;

  font-weight: 700;
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const ResidentsButton = styled.button`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-decoration: none;
  color: ${({ theme }) => theme.bgPrimary};

  background-color: ${({ theme }) => theme.crossThemeAccent};

  border-radius: 5px;
  transition: clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  clip-path: polygon(
    12% 0%,
    100% 0%,
    100% 30%,
    100% 60%,
    88% 100%,
    0% 100%,
    0% 70%,
    0% 40%
  );

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover {
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 0%,
      100% 100%,
      88% 100%,
      0% 100%,
      0% 70%,
      0% 0%
    );
    color: ${({ theme }) => theme.secondary};
  }

  @media screen and (min-width: ${mobile}) {
    z-index: 1;
    bottom: -15%;
    left: 31%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 160px;
  }

  @media screen and (min-width: ${tablet}) {
    z-index: 1;
    bottom: -7%;
    left: 20%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 200px;
  }

  @media screen and (min-width: ${desktop}) {
    bottom: 35%;
    left: 85%;
    transform: translate(-50%, -50%);
    height: 70px;
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  width: 30px;
  height: 30px;

  & svg {
    stroke: ${getHeartColor};
    fill: ${getHeartColor};
  }
`;
