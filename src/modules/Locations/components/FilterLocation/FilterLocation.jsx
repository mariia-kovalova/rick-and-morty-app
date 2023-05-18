import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationsByFilter } from 'redux/locations/thunks';
import { Input, Label, StyledDiv, Svg, Wrap } from './FilterLocation.styled';
import sprite from 'shared/icons/sprite.svg';

export const FilterLocation = () => {
  const [filterData, setFilterData] = useState({
    name: '',
    type: '',
    dimension: '',
  });

  const dispatch = useDispatch();

  const onFilterBtn = e => {
    let filteredValue = {};
    filteredValue = { [e.target.name]: e.target.value.trim() };
    setFilterData(filterData => ({ ...filterData, ...filteredValue }));
  };

  useEffect(() => {
    dispatch(getLocationsByFilter(filterData));
  }, [filterData, dispatch]);

  return (
    <StyledDiv>
      <Wrap>
        <Label htmlFor="">
          <Svg width="30" height="30">
            <use href={`${sprite}#icon-search-Icon`} />
          </Svg>
        </Label>
        <Input
          name="name"
          type="text"
          placeholder="Location name"
          label="name"
          onChange={onFilterBtn}
        />
      </Wrap>
      <Wrap>
        <Label htmlFor="">
          <Svg width="30" height="30">
            <use href={`${sprite}#icon-search-Icon`} />
          </Svg>
        </Label>
        <Input
          name="type"
          type="text"
          placeholder="Location type"
          label="type"
          onChange={onFilterBtn}
        />
      </Wrap>
      <Wrap>
        <Label htmlFor="">
          <Svg width="30" height="30">
            <use href={`${sprite}#icon-search-Icon`} />
          </Svg>
        </Label>
        <Input
          name="dimension"
          type="text"
          placeholder="Location dimension"
          label="dimension"
          onChange={onFilterBtn}
        />
      </Wrap>
    </StyledDiv>
  );
};
