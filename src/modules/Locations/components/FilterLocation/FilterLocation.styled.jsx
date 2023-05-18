import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: ${desktop}) {
    flex-direction: row;
  }
`;

export const Wrap = styled.div`
  display: flex;
`;

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

export const Input = styled.input`
  background-color: #fff;
  outline: none;
  border: 2px solid ${({ theme }) => theme.paginationAccent};
  border-left: none;
  border-radius: 0 8px 8px 0;
  color: #212121;
  padding: 14px 10px 14px 0px;
  width: 200px;

  @media screen and (min-width: ${tablet}) {
    padding: 20px 10px 20px 0;
    width: 450px;
  }

  @media screen and (min-width: ${desktop}) {
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
