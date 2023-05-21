import { useDispatch } from 'react-redux';
import { Tooltip } from '../ToolTip';
import { IconBtn, Svg } from './Heart.styled';
import sprite from 'shared/icons/sprite.svg';
import { addToLibrary } from 'redux/library/slice';
import { useEffect, useState } from 'react';

export const Heart = ({ id, isFavourire, libraryListName }) => {
  const [isFav, setIsFav] = useState(isFavourire);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToLibrary({ id, libraryListName }));
  }, [dispatch, id, libraryListName]);

  const hendleHeartClick = e => {
    e.preventDefault();
    setIsFav(isFav => !isFav);
  };

  return (
    <Tooltip text={isFav ? 'remove from my favourite' : 'add to my favourite'}>
      <IconBtn onClick={hendleHeartClick}>
        <Svg width="25" height="25" isFavourire={isFavourire}>
          <use href={`${sprite}#icon-heart-icon`} />
        </Svg>
      </IconBtn>
    </Tooltip>
  );
};
