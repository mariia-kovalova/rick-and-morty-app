import styled from '@emotion/styled/macro';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  margin: 0 auto;
`;

export const Selected = styled.select`
  width: 210px;

  outline: none;
  border: 2px solid ${({ theme }) => theme.paginationAccent};
  border-radius: 8px;
  background-color: #fff;
  color: #212121;
  padding: 14px 10px 14px 10px;
  text-align: center;
`;

export const Option = styled.option`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: grey;
`;
