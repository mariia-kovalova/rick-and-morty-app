import { useDispatch } from 'react-redux';
import { Tooltip } from '../ToolTip';
import { IconBtn, Svg } from './Heart.styled';
import sprite from 'shared/icons/sprite.svg';
import { addToLibrary, removeFromLibrary } from 'redux/library/slice';
import { useState } from 'react';
// import { useOneCharacter } from 'hooks/useOneCharacter';
// import { useOneEpisode } from 'hooks/useOneEpisode';
// import { toggleIsFavFuncGenerator } from 'shared/utils/toggleIsFavFuncGenerator';

export const Heart = ({ id, isFavourite, libraryListName }) => {
  // const { character } = useOneCharacter();
  // const { episode } = useOneEpisode();
  // const { location } = useOneEpisode();
  const [isFav, setIsFav] = useState(isFavourite);
  const dispatch = useDispatch();
  // const toggleIsFav = toggleIsFavFuncGenerator(
  //   id,
  //   character,
  //   episode,
  //   location,
  //   dispatch,
  //   libraryListName
  // );

  const hendleHeartClick = e => {
    e.preventDefault();
    if (!isFavourite) {
      // toggleIsFav(true);
      dispatch(addToLibrary({ id, libraryListName }));
    }
    if (isFavourite) {
      // toggleIsFav(false);
      dispatch(removeFromLibrary({ id, libraryListName }));
    }
    setIsFav(isFav => !isFav);
  };

  return (
    <Tooltip text={isFav ? 'remove from my favourite' : 'add to my favourite'}>
      <IconBtn onClick={hendleHeartClick}>
        <Svg width="25" height="25" isFavourite={isFav}>
          <use href={`${sprite}#icon-heart-icon`} />
        </Svg>
      </IconBtn>
    </Tooltip>
  );
};
