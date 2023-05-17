import styled from '@emotion/styled/macro';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;

  margin: 0 auto;
  max-width: 500px;
`;

export const AvancedFilters = styled.button`
  position: relative;
  width: 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.paginationAccent};
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  fill: ${({ theme }) => theme.bgPrimary};
  transition: fill 250ms ${({ theme }) => theme.cubic};

  ${AvancedFilters}:hover & {
    fill: ${({ theme }) => theme.secondary};
  }
`;
