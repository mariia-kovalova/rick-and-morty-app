import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';

export const StyledH2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;

  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.characterCardTextAccent};

  @media screen and (min-width: ${tablet}) {
    font-size: 30px;
  }
`;
