import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const CardDecoration = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: fit-content;
  margin: 0 auto;

  @media screen and (min-width: ${desktop}) {
    width: 704px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -1%;
    right: -1.5%;
    transform: rotate(-90deg);

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${tablet}) {
      right: -0.5%;
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

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${tablet}) {
      left: -0.5%;
    }
  }
`;

export const CardWrap = styled.div`
  padding: 60px 20px 20px 20px;

  background: ${({ theme }) => theme.bgCharacterCard};
  border: 3px solid ${({ theme }) => theme.crossThemeAccent};
  border-radius: 4px;

  @media screen and (min-width: ${tablet}) {
    padding: 60px 50px 30px 50px;
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
    border-right: 3px solid ${({ theme }) => theme.crossThemeAccent};
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
    border-right: 3px solid ${({ theme }) => theme.crossThemeAccent};
  }
`;
