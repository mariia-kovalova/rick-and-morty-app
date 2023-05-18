import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import {
  CardDecoration,
  CardWrap,
} from 'shared/styles/components/CardDecoration.styled';

export const Wrap = styled.div`
  @media screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
`;

export const MobileInfoDecoration = styled(CardDecoration)`
  &::before {
    z-index: -1;
  }

  @media screen and (min-width: ${tablet}) {
    &:nth-of-type(2) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }
`;

export const CharacterCardWrap = styled(CardWrap)`
  min-height: 376px;

  &::before {
    top: -18px;
    left: -18.6px;
  }

  &::after {
    bottom: -18px;
    right: -18.6px;
  }
`;
