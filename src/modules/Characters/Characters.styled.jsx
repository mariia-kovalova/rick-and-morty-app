import styled from '@emotion/styled';
import { Section } from 'shared/styles/components/Section.styled';

export const StyledH1 = styled.h1`
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

export const FilterSection = styled(Section)`
  padding-bottom: 0;
`;
