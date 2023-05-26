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
    top: -4px;
    right: -4px;
    transform: rotate(-90deg);

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${tablet}) {
      right: -4px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: -4px;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.crossThemeAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;

    @media screen and (min-width: ${tablet}) {
      left: -4px;
    }
  }
`;

export const CardWrap = styled.div`
  padding: 60px 20px 20px 20px;
  width: 280px;
  height: 400px;

  background: ${({ theme }) => theme.bgCharacterCard};
  border: 3px solid ${({ theme }) => theme.crossThemeAccent};
  border-radius: 4px;
  clip-path: polygon(10% 0, 100% 0, 100% 93%, 90% 100%, 0 100%, 0 7%);

  @media screen and (min-width: ${tablet}) {
    width: 704px;
    height: 416px;
    padding: 60px 50px 30px 50px;
    clip-path: polygon(3.8% 0, 100% 0, 100% 93.5%, 96.2% 100%, 0 100%, 0 6.5%);
  }

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 10px;
    transform: rotate(45deg);
    z-index: 2;

    width: 2px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
    border-right: 3px solid ${({ theme }) => theme.crossThemeAccent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    right: 10px;
    transform: rotate(-135deg);
    z-index: 2;

    width: 2px;
    height: 40px;

    background-color: ${({ theme }) => theme.bgPrimary};
    border-right: 3px solid ${({ theme }) => theme.crossThemeAccent};
  }
`;
