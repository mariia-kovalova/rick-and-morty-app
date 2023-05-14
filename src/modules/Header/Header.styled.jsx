import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;

  & .container-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
  }

  & .container-right {
    flex: 1;
  }
`;
