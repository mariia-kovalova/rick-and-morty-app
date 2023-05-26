import React from 'react';
import { Link } from 'react-router-dom';
import { home } from 'shared/constants/routes';
import logoPS from 'shared/images/logoPS.png';

export const LogoPS = () => {
  return (
    <Link to={home}>
      <img src={`${logoPS}`} alt="team logo" width="150px" />
    </Link>
  );
};
