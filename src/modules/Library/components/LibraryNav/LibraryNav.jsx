import { links } from './links';
import { LibaryLink } from '../LibraryLink/LibaryLink';
import { Item, List } from './LibraryNav.styled';

export const LibraryNav = () => {
  return (
    <nav>
      <List>
        {links.map(({ path, text }) => (
          <Item key={text}>
            <LibaryLink to={path}>
              <span>{text}</span>
            </LibaryLink>
          </Item>
        ))}
      </List>
    </nav>
  );
};
