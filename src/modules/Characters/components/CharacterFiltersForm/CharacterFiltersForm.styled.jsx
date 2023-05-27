import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';
import { BaseButton } from 'shared/styles/components/BaseButton.styled';

export const FormTittle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Form = styled.form`
  width: 240px;

  @media (min-width: ${tablet}) {
    width: 400px;
  }
`;

export const ListWrap = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ListTittle = styled.p`
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textPrimary};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const BtnsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  width: 220px;
  margin: 20px auto 0;

  @media (min-width: ${tablet}) {
    width: 320px;
  }
`;

export const BtnsItem = styled.li`
  &:nth-of-type(1) {
    flex-basis: 100%;
  }
  &:nth-of-type(2) {
    flex-basis: calc(60% - 6px);
  }
  &:nth-of-type(3) {
    flex-basis: 40%;
  }
`;

export const Btn = styled(BaseButton)`
  padding: 10px 18px;

  width: 100%;

  &.apply {
    width: 100%;
  }

  &.reset {
    color: ${({ theme }) => theme.crossThemeAccent};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.crossThemeAccent};

    &:hover {
      color: ${({ theme }) => theme.characterCardTextAccent};
      border-color: ${({ theme }) => theme.crossThemeAccent};
    }
  }

  &.cancel {
    color: ${({ theme }) => theme.disabled};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.disabled};

    &:hover {
      color: ${({ theme }) => theme.characterCardTextAccent};
      border-color: ${({ theme }) => theme.crossThemeAccent};
    }
  }
`;
