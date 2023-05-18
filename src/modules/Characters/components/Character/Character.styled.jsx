import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { CardWrap } from 'shared/styles/components/CardDecoration.styled';

export const CharacterCardWrap = styled(CardWrap)`
  position: relative;
  min-height: 376px;

  @media screen and (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 235px 1fr;
    gap: 60px;
  }
`;
