import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { CardWrap } from 'shared/styles/components/CardDecoration.styled';

export const CharacterCardWrap = styled(CardWrap)`
  position: relative;
  min-height: 400px;

  @media screen and (min-width: ${tablet}) {
    min-height: 416px;
    display: grid;
    grid-template-columns: 235px 1fr;
    gap: 60px;
  }
`;
