import styled from '@emotion/styled';
import { desktop } from 'shared/constants/deviceSizes';

export const StyledDiv = styled.ul`
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
