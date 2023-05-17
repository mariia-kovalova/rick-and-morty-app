import { Input, Label, Svg, Wrap } from './SearchInput.styled';
import sprite from 'shared/icons/sprite.svg';

export const SearchInput = ({ id, ...rest }) => {
  return (
    <Wrap>
      <Label htmlFor={id}>
        <Svg width="30" height="30">
          <use href={`${sprite}#icon-search-Icon`} />
        </Svg>
      </Label>
      <Input id={id} {...rest} />
    </Wrap>
  );
};
