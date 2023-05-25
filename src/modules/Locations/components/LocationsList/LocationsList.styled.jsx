import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledH2 = styled.h2`
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

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-bottom: 30px;
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
