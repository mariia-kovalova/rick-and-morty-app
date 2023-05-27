import styled from '@emotion/styled';
import { tablet, desktop } from 'shared/constants/deviceSizes';

export const PageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 80px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 0px;
  }
`;

export const Overlay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const TextNum = styled.p`
  margin: 0;
  font-size: 80px;
  display: inline-block;
  font-family: 'Combo', cursive;

  &.first-for {
    position: relative;
    left: 25px;
    color: ${({ theme }) => theme.notFoundPageNum};
  }
  &.second-for {
    position: relative;
    right: 25px;
    color: ${({ theme }) => theme.crossThemeAccent};
  }
  @media screen and (min-width: ${tablet}) {
    font-size: 280px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 280px;
    &.first-for {
      left: 80px;
    }
  }
`;

export const ImgSize = styled.img`
  height: 50%;
  width: 400px;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.crossThemeAccent};
  font-size: 35px;
  font-family: 'Combo', cursive;
  span {
    color: #1abed6;
  }
  @media screen and (min-width: ${tablet}) {
    font-size: 70px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 80px;
  }
`;
