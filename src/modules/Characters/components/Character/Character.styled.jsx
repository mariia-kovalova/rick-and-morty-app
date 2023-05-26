import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';
import { CardWrap } from 'shared/styles/components/CardDecoration.styled';

export const CharacterCardWrap = styled(CardWrap)`
  position: relative;

  @media screen and (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 235px 1fr;
    gap: 60px;
    &::before {
      top: -8px;
    }
  }
`;
