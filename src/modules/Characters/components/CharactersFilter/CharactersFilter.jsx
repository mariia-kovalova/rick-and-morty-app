import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { Modal } from 'shared/components/Modal';
import { SearchInput } from 'shared/components/SearchInput';
import { AvancedFilters, Svg, Wrap } from './CharactersFilter.styled';
import { CharacterFiltersForm } from '../CharacterFiltersForm/CharacterFiltersForm';
import sprite from 'shared/icons/sprite.svg';
import { Tooltip } from 'shared/components/ToolTip';

const searchInput = {
  id: nanoid(),
  inputName: 'name',
};

const DELAY = 500;

export const CharactersFilter = () => {
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

  const handleSearch = debounce(async name => {
    if (name.trim() === '') {
      searchParams.delete(searchInput.inputName);
      setSearchParams(searchParams);
      return;
    }
    if (errors[searchInput.inputName]) return;
    setSearchParams({ name, ...searchParams });
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
          onChange={e => handleSearch(e.target.value)}
          placeholder="Filter by name..."
        />
        <AvancedFilters type="button" onClick={handleToggleModal}>
          <Tooltip text="advanced filters" ariaLabel="advanced filters">
            <Svg width="30" height="30">
              <use href={`${sprite}#icon-filter-solid`} />
            </Svg>
          </Tooltip>
        </AvancedFilters>
      </Wrap>
      {showModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CharacterFiltersForm onCloseModal={handleToggleModal} />
        </Modal>
      )}
    </>
  );
};
