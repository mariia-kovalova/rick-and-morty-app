import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import {
  CardDecoration,
  CardWrap,
} from 'shared/styles/components/CardDecoration.styled';

export const EpisodeDecor = styled(CardDecoration)`
  margin: 0 auto;

  @media screen and (min-width: ${desktop}) {
    width: 704px;
  }

  &::before {
    z-index: -1;
  }
`;

export const EpisodeWrap = styled(CardWrap)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 30px;

  padding-bottom: 180px;

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 100px;
  }

  &::before {
    top: -18px;
    left: -18.6px;
  }

  &::after {
    bottom: -18px;
    right: -18.6px;
  }

  & + div::before {
    @media screen and (min-width: ${tablet}) {
      left: -11%;
      width: 585px;
      height: 55px;
    }
  }

  & ul:first-of-type {
    bottom: -134%;
    left: 0;

    @media screen and (min-width: ${tablet}) {
      bottom: -8%;
      left: -30%;
    }
  }
`;
