import styled from '@emotion/styled';

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

export const FlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.div`
  padding: 8px 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const BasicWrapper = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 100%;
`;
