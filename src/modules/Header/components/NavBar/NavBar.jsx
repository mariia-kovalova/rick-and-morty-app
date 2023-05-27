import { navLinksArr } from 'modules/Header/navLinksArr';
import { NavBarLink, StyledUl } from './NavBar.styled';

export const NavBar = () => {
  return (
    <nav>
      <StyledUl>
        {navLinksArr.map(({ name, path }) => (
          <li key={name}>
            <NavBarLink key={path} to={path}>
              {name}
            </NavBarLink>
          </li>
        ))}
      </StyledUl>
    </nav>
  );
};
