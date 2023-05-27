import styled from '@emotion/styled';

export const StyledFooter = styled.footer``;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid ${({ theme }) => theme.textPrimary};
  font-size: 20px;
  font-weight: 500;

  & .container-madeBy {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .container-madeBy__logo {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      & div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  & .container-support {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & use {
    height: 50px;
  }
`;

export const Support = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
`;
