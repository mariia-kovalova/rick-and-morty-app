import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { Modal } from 'shared/components/Modal';
import { SearchInput } from 'shared/components/SearchInput';
import {
  AvancedFilters,
  InfoCircleStyled,
  Svg,
  Wrap,
} from './CharactersFilter.styled';
import { CharacterFiltersForm } from '../CharacterFiltersForm/CharacterFiltersForm';
import sprite from 'shared/icons/sprite.svg';
import { Tooltip } from 'shared/components/ToolTip';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { filtersArr, inputs } from '../CharacterFiltersForm/inputs';
import { getCleanValues } from 'shared/utils/getCleanValues';
import { down } from 'shared/constants/tootipPosition';
import { getApliedFiltersCount } from 'shared/utils/getApliedFiltersCount';

const searchInput = {
  id: nanoid(),
  inputName: 'name',
};

const DELAY = 500;

export const CharactersFilter = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { name: searchParams.get(searchInput.inputName) ?? '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    const filtersCount = getApliedFiltersCount(filtersArr, searchParams);
    setCount(filtersCount);
  }, [searchParams]);

  const handleSearch = debounce(async ({ target }) => {
    if (target.value.trim() === '') {
      searchParams.delete(target.name);
      setSearchParams(searchParams);
      return;
    }
    if (errors[target.name]) return;
    setSearchParams({
      ...getCleanValues(getSearchValues(inputs, searchParams)),
      [target.name]: target.value,
    });
  }, DELAY);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Wrap>
        <SearchInput
          id={searchInput.id}
          inputName={searchInput.inputName}
          register={register}
          errors={errors}
          onChange={handleSearch}
          placeholder="Filter by name..."
        />
        <Tooltip
          text="advanced filters"
          ariaLabel="advanced filters"
          position={down}
        >
          <AvancedFilters type="button" onClick={handleToggleModal}>
            <Svg width="30" height="30">
              <use href={`${sprite}#icon-filter-solid`} />
            </Svg>
            <InfoCircleStyled isHidden={count === 0}>{count}</InfoCircleStyled>
          </AvancedFilters>
        </Tooltip>
      </Wrap>
      {showModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CharacterFiltersForm onCloseModal={handleToggleModal} />
        </Modal>
      )}
    </>
  );
};
