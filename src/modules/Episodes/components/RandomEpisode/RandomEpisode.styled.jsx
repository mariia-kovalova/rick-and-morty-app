import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { CardWrap } from 'shared/styles/components/CardDecoration.styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: space-around;
  }
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
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  color: inherit;

  & ul.random-episode {
    position: absolute;
    top: 148px;
    left: 4px;

    @media screen and (min-width: ${tablet}) {
      top: 70px;
      left: -134px;
    }
  }
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
