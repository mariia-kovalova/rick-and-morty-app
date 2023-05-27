import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const AboutModal = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  overflow: auto;

  width: 250px;
  height: 400px;

  @media screen and (min-width: ${tablet}) {
    width: 500px;
    height: 500px;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.borderModal};
      border-radius: 5px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    height: 600px;
    width: 600px;
  }
`;

export const Greeting = styled.h2`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

export const Start = styled.p`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PageHeader = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  margin-bottom: 5px;
  padding-left: 20px;
`;
