import { home } from 'shared/constants/routes';
import RaM_logo_BW from 'shared/images/RaM_logo_BW.png';
import { StyledLink } from './LogoBW.styled';

export const LogoBW = () => {
  return (
    <StyledLink to={home}>
      <img src={`${RaM_logo_BW}`} alt="logo" />
    </StyledLink>
  );
};
