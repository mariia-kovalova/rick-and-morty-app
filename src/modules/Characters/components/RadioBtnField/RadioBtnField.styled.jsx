import styled from '@emotion/styled/macro';

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.label`
  cursor: pointer;
  display: block;
  padding: 5px;

  text-transform: capitalize;
  border: 3px solid ${({ theme }) => theme.disabled};
  color: ${({ theme }) => theme.disabled};
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic},
    border-color 250ms ${({ theme }) => theme.cubic};

  ${Input}:checked + & {
    color: ${({ theme }) => theme.characterCardTextAccent};
    border: 3px solid ${({ theme }) => theme.characterCardTextAccent};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.characterCardTextAccent};
    border: 3px solid ${({ theme }) => theme.characterCardTextAccent};
  }
`;
