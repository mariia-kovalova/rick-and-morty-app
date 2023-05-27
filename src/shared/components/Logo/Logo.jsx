import { home } from 'shared/constants/routes';
import { StyledLink } from './Logo.styled';
import RaM_logo from 'shared/images/RaM_logo.png';

export const Logo = () => {
  return (
    <StyledLink to={home}>
      <img src={`${RaM_logo}`} alt="logo" width="70px" />
    </StyledLink>
  );
};
