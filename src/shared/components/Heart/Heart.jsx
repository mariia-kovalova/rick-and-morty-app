import { useDispatch } from 'react-redux';
import { Tooltip } from '../ToolTip';
import { IconBtn, Svg } from './Heart.styled';
import sprite from 'shared/icons/sprite.svg';
import { addToLibrary, removeFromLibrary } from 'redux/library/slice';
import { useState } from 'react';

export const Heart = ({ id, isFavourite, libraryListName }) => {
  const [isFav, setIsFav] = useState(isFavourite);
  const dispatch = useDispatch();

  const hendleHeartClick = e => {
    e.preventDefault();
    if (!isFavourite) dispatch(addToLibrary({ id, libraryListName }));
    if (isFavourite) dispatch(removeFromLibrary({ id, libraryListName }));
    setIsFav(!isFav);
  };

  return (
    <Tooltip text={isFav ? 'remove from my favourite' : 'add to my favourite'}>
      <IconBtn onClick={hendleHeartClick}>
        <Svg width="30" height="30" isFavourite={isFav}>
          <use href={`${sprite}#icon-heart-icon`} />
        </Svg>
      </IconBtn>
    </Tooltip>
  );
};
