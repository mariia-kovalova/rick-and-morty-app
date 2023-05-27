import { navLinksArr } from 'modules/Header/navLinksArr';
import {
  Button,
  NavBarLink,
  StyledNavBar,
  StyledUl,
  Svg,
} from './MobileNavBar.styled';
import sprite from 'shared/icons/sprite.svg';

export const MobileNavBar = ({ onMenuClose }) => {
  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onMenuClose();
  };

  return (
    <StyledNavBar onClick={handleOverlayClick}>
      <Button onClick={onMenuClose}>
        <Svg width="34" height="34">
          <use href={`${sprite}#icon-x-close`} />
        </Svg>
      </Button>

      <StyledUl>
        {navLinksArr.map(({ name, path }) => (
          <li key={name} onClick={onMenuClose}>
            <NavBarLink key={path} to={path}>
              {name}
            </NavBarLink>
          </li>
        ))}
      </StyledUl>
    </StyledNavBar>
  );
};
