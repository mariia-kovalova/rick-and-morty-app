import { Tooltip } from '../ToolTip';
import { IconBtn, Svg } from './Heart.styled';
import sprite from 'shared/icons/sprite.svg';

export const Heart = ({ isFavourire, libraryListName }) => {
  const hendleHeartClick = e => {
    e.preventDefault();
    console.log(libraryListName);
  };

  return (
    <Tooltip
      text={isFavourire ? 'remove from my favourite' : 'add to my favourite'}
    >
      <IconBtn onClick={hendleHeartClick}>
        <Svg width="25" height="25" isFavourire={isFavourire}>
          <use href={`${sprite}#icon-heart-icon`} />
        </Svg>
      </IconBtn>
    </Tooltip>
  );
};
