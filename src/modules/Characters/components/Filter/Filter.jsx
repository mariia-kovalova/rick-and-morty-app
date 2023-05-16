import { nanoid } from '@reduxjs/toolkit';
import { SearchInput } from 'shared/components/SearchInput';
import { AvancedFilters, Svg, Wrap } from './Filter.styled';
import sprite from 'shared/icons/sprite.svg';

const id = nanoid();

export const Filter = () => {
  return (
    <Wrap>
      <SearchInput id={id} placeholder="Filter by name..." />
      <AvancedFilters>
        <Svg width="30" height="30">
          <use href={`${sprite}#icon-filter-solid`} />
        </Svg>
      </AvancedFilters>
    </Wrap>
  );
};
