import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;

  color: inherit;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Randomazier = styled.div`
  padding-top: 26px;

  @media screen and (min-width: ${tablet}) {
    width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: ${desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap: 30px;
  }
`;
