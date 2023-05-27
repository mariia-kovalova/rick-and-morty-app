import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledDiv = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  @media (min-width: ${tablet}) {
    flex-basis: calc((100% - 2 * 10px) / 3);
  }

  & input {
    @media (min-width: ${tablet}) and (max-width: ${desktop}) {
      width: 100%;
    }
  }
`;
