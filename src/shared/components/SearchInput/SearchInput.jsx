import { ErrorMessage } from '@hookform/error-message';
import { Error, Input, Label, Svg, Wrap } from './SearchInput.styled';
import sprite from 'shared/icons/sprite.svg';

export const SearchInput = ({
  id,
  inputName,
  errors,
  register,
  onChange,
  ...rest
}) => (
  <Wrap>
    <Label htmlFor={id}>
      <Svg width="30" height="30">
        <use href={`${sprite}#icon-search-Icon`} />
      </Svg>
    </Label>
    <Input
      id={id}
      type="text"
      {...rest}
      {...register(inputName, {
        onChange,
      })}
    />
    <Error>
      <ErrorMessage errors={errors} name={inputName} />
    </Error>
  </Wrap>
);
