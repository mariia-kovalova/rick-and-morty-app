import { NavBarLink } from './NavBar.styled';
import { navLinksArr } from './navLinksArr';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {navLinksArr.map(({ name, path }) => (
            <NavBarLink key={path} to={path}>
              {name}
            </NavBarLink>
          ))}
        </li>
      </ul>
    </nav>
  );
};
