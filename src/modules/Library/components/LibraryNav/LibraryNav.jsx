import { library } from 'shared/constants/routes';
import { LibaryLink } from '../LibraryLink/LibaryLink';
import { List, NavBar } from './LibraryNav.styled';
import {
  favcharacters,
  favepisodes,
  favlocations,
} from 'shared/constants/libaryListName';

const links = [
  { path: `/${library}/${favcharacters}`, text: 'characters' },
  { path: `/${library}/${favepisodes}`, text: 'episodes' },
  { path: `/${library}/${favlocations}`, text: 'locations' },
];

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
