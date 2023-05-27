import React from 'react';
import logoPS from 'shared/images/logoPS.png';
import { StyledA } from './LogoPS.styled';

export const LogoPS = () => {
  return (
    <StyledA
      href="https://github.com/mariia-kovalova/rick-and-morty-app"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img src={`${logoPS}`} alt="team logo" />
    </StyledA>
  );
};
