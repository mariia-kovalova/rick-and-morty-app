import { useDispatch } from 'react-redux';
import { Tooltip } from '../ToolTip';
import { IconBtn, Svg } from './Heart.styled';
import sprite from 'shared/icons/sprite.svg';
import { addToLibrary, removeFromLibrary } from 'redux/library/slice';
import { useState } from 'react';

export const Heart = ({ id, isFavourire, libraryListName }) => {
  const [isFav, setIsFav] = useState(isFavourire);
  const dispatch = useDispatch();

  const hendleHeartClick = e => {
    e.preventDefault();
    if (isFav) dispatch(addToLibrary({ id, libraryListName }));
    if (!isFav) dispatch(removeFromLibrary({ id, libraryListName }));
    setIsFav(isFav => !isFav);
  };

  return (
    <Tooltip text={isFav ? 'remove from my favourite' : 'add to my favourite'}>
      <IconBtn onClick={hendleHeartClick}>
        <Svg width="25" height="25" isFavourire={isFav}>
          <use href={`${sprite}#icon-heart-icon`} />
        </Svg>
      </IconBtn>
    </Tooltip>
  );
};
