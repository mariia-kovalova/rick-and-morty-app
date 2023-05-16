import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;

  margin: 0 auto;
  max-width: 500px;
`;

export const AvancedFilters = styled.div`
  position: relative;
  width: 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.paginationAccent};
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  fill: ${({ theme }) => theme.bgPrimary};
  transition: backgrond-color 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    background-color: rgba(17, 17, 17, 0.1);
  }
`;
