import { links } from './links';
import { LibaryLink } from '../LibraryLink/LibaryLink';
import { List, NavBar } from './LibraryNav.styled';

export const LibraryNav = () => {
  return (
    <NavBar>
      <List>
        {links.map(({ path, text }) => (
          <li key={text}>
            <LibaryLink to={path}>
              <span>{text}</span>
            </LibaryLink>
          </li>
        ))}
      </List>
    </NavBar>
  );
};
