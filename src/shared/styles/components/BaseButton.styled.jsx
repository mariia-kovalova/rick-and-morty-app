import styled from '@emotion/styled';

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  clip-path: polygon(
    10% 0%,
    100% 0%,
    100% 30%,
    100% 60%,
    90% 100%,
    0% 100%,
    0% 70%,
    0% 40%
  );

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.paginationAccent};
  border-radius: 4px;
  transition: transform 250ms ${({ theme }) => theme.cubic},
    clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.disabled};
  }

  &:not(:disabled):hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.secondary};
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 0%,
      100% 100%,
      88% 100%,
      0% 100%,
      0% 70%,
      0% 0%
    );
  }
`;
