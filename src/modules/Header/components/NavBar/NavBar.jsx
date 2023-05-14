import { NavBarLink, StyledUl } from './NavBar.styled';
import { navLinksArr } from './navLinksArr';

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