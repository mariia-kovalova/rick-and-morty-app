import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { desktop } from 'shared/constants/deviceSizes';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardWrap = styled(Link)`
  position: relative;
  display: block;
  padding: 60px 20px 20px 20px;
  width: 250px;
  height: 350px;

  color: inherit;
  background: ${({ theme }) => theme.bgCharacterCard};
  border: 3px solid ${({ theme }) => theme.paginationAccent};
  border-radius: 4px;

  @media screen and (min-width: ${desktop}) {
    padding: 60px 50px 30px 50px;
    width: 550px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -21px;
    left: -20.6px;
    transform: rotate(45deg);

    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
    border-right: 3px solid ${({ theme }) => theme.paginationAccent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -21px;
    right: -20.6px;
    transform: rotate(-135deg);

    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
    border-right: 3px solid ${({ theme }) => theme.paginationAccent};
  }
`;

export const Decoration = styled.div`
  position: relative;
  width: fit-content;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -1%;
    right: -1.5%;
    transform: rotate(-90deg);

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${desktop}) {
      right: -1%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1%;
    left: -1.5%;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${desktop}) {
      left: -1%;
    }
  }
`;
