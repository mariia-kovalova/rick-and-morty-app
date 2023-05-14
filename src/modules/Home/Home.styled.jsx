import styled from '@emotion/styled';
import homeLeft from '../../shared/images/homeLeftBW.jpg';
import homeRight from '../../shared/images/homeRightBW.jpg';
import portalGif from '../../shared/images/portalGif.gif';

export const HiddenTittle = styled.h1`
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

export const StyledDiv = styled.div`
  /* position: relative;
  top: -75px; */
  display: flex;
  align-items: center;
  justify-content: center;

  & .container-left {
    background-image: url(${homeLeft});
    opacity: 0.8;
    height: 804px;
    width: 640px;
  }
  & .container-right {
    background-image: url(${homeRight});
    opacity: 0.7;
    height: 804px;
    width: 640px;
  }

  & .container-button {
    position: absolute;
  }
`;

export const SectionHome = styled.section``;

export const StyledBtn = styled.button`
  padding: 0;
  margin: 0;

  width: 300px;
  height: 300px;
  background: url(${portalGif});
  background-size: contain;
  background-position: 50% 50%;

  border-radius: 50%;

  text-transform: uppercase;
`;
