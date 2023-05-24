import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import {
  CardDecoration,
  CardWrap,
} from 'shared/styles/components/CardDecoration.styled';

export const RandomEpisodeDecor = styled(CardDecoration)`
  margin: 0 auto;

  @media screen and (min-width: ${desktop}) {
    width: 1100px;
  }

  &::before {
    z-index: -1;
  }
`;

export const EpisodeWrap = styled(CardWrap)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 196px;

  height: 458px;

  @media screen and (min-width: ${tablet}) {
    align-items: end;
    gap: 30px;

    height: 440px;
  }

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 100px;

    height: 380px;
  }

  &::before {
    top: -18px;
    left: -18.6px;
  }

  &::after {
    bottom: -18px;
    right: -18.6px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  color: inherit;
`;

export const Randomizer = styled.div`
  align-self: center;

  @media screen and (min-width: ${desktop}) {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
