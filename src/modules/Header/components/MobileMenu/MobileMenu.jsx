import { useState } from 'react';
import sprite from 'shared/icons/sprite.svg';
import { MobileNavBar } from '../MobileNavBar/MobileNavBar';
import { MenuButton, MenuIcon } from './MobileMenu.styled';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MenuButton onClick={handleToggleMenu}>
        <MenuIcon>
          <use href={`${sprite}#icon-menu`} />
        </MenuIcon>
      </MenuButton>
      {showMenu && <MobileNavBar onMenuClose={handleToggleMenu} />}
    </>
  );
};
