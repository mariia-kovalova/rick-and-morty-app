import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';
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

export const RandomEpisodeWrap = styled(CardWrap)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 100px;

  &::before {
    top: -18px;
    left: -18.6px;
  }

  &::after {
    bottom: -18px;
    right: -18.6px;
  }
`;

export const Randomizer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
