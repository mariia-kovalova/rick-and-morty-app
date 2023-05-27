import { links } from './links';
import { LibaryLink } from '../LibraryLink/LibaryLink';
import { Item, List, NavBar } from './LibraryNav.styled';

export const LibraryNav = () => {
  return (
    <NavBar>
      <List>
        {links.map(({ path, text }) => (
          <Item key={text}>
            <LibaryLink to={path}>
              <span>{text}</span>
            </LibaryLink>
          </Item>
        ))}
      </List>
    </NavBar>
  );
};
