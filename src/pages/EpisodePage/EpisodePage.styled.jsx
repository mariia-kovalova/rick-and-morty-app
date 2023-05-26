import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import {
  CardDecoration,
  CardWrap,
} from 'shared/styles/components/CardDecoration.styled';

export const EpisodeDecor = styled(CardDecoration)`
  margin: 0 auto;
`;

export const EpisodeWrap = styled(CardWrap)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;

  @media screen and (min-width: ${tablet}) {
    justify-content: center;
  }

  &::before {
    top: -5px;
    left: 13px;
  }

  &::after {
    bottom: -5px;
    right: 13px;
  }

  & + div::before {
    @media screen and (min-width: ${tablet}) {
      left: -11%;
      width: 585px;
      height: 55px;
    }
  }

  & ul.episodes-page {
    position: absolute;
    top: 107%;
    left: 0;

    @media screen and (min-width: ${tablet}) {
      top: 27%;
      left: -30%;
    }
  }
`;

export const StyledH2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.characterCardTextAccent};

  @media screen and (min-width: ${tablet}) {
    font-size: 30px;
  }
`;
