import styled from '@emotion/styled/macro';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
`;
export const Selected = styled.select`
  background-color: #fff;
  outline: none;
  border: 2px solid ${({ theme }) => theme.paginationAccent};
  border-radius: 8px;
  color: #212121;
  padding: 14px 10px 14px 0px;
  width: 260px;
`;
export const Option = styled.option`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: grey;
`;
