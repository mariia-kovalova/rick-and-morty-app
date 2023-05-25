import styled from '@emotion/styled';

export const InfoCircle = styled.div`
  width: fit-content;
  min-width: 10px;
  height: 16px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.crossThemeAccent};
`;
