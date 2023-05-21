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

const input = {
  id: nanoid(),
  inputName: 'name',
};

export const CharactersFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    formState: { errors },
    getFieldState,
  } = useForm({
    defaultValues: { name: searchParams.get(input.inputName) ?? '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { invalid } = getFieldState(input.inputName);

  console.log(invalid);

  const handleSearch = debounce(async name => {
    if (name.trim() === '') {
      searchParams.delete(input.inputName);
      setSearchParams(searchParams);
      return;
    }

    setSearchParams({ name, ...searchParams });
  }, 300);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Wrap>
        <form>
          <SearchInput
            id={input.id}
            type="text"
            inputName={input.inputName}
            register={register}
            errors={errors}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Filter by name..."
          />
        </form>
        <AvancedFilters type="button" onClick={handleToggleModal}>
          <Svg width="30" height="30">
            <use href={`${sprite}#icon-filter-solid`} />
          </Svg>
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
