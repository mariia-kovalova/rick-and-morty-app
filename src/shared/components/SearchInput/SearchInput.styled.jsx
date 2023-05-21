import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';

export const Label = styled.label`
  position: relative;
  background-color: #fff;
  outline: none;
  border: 2px solid ${({ theme }) => theme.paginationAccent};
  border-right: none;
  border-radius: 8px 0 0 8px;
  color: #212121;
  padding: 14px 25px;

  @media screen and (min-width: ${tablet}) {
    padding: 20px 30px;
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  fill: ${({ theme }) => theme.paginationAccent};
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: translate(-40%, -40%);
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;

  &:hover ${Svg} {
    transform: translate(-40%, -40%);
  }
`;

export const Input = styled.input`
  background-color: #fff;
  outline: none;
  border: 2px solid ${({ theme }) => theme.paginationAccent};
  border-left: none;
  border-radius: 0 8px 8px 0;
  color: #212121;
  padding: 14px 10px 14px 0px;
  width: 160px;

  @media screen and (min-width: ${tablet}) {
    padding: 20px 10px 20px 0;
    width: 300px;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: grey;
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);

  color: red;
  font-size: 12px;
  font-weight: 500;
`;
