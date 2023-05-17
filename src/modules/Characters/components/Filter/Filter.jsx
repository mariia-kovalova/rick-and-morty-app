import { nanoid } from '@reduxjs/toolkit';
import { SearchInput } from 'shared/components/SearchInput';
import { AvancedFilters, Svg, Wrap } from './Filter.styled';
import sprite from 'shared/icons/sprite.svg';
import { useState } from 'react';
import { Modal } from 'shared/components/Modal';

const id = nanoid();

export const Filter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Wrap>
        <SearchInput id={id} placeholder="Filter by name..." />
        <AvancedFilters type="button" onClick={handleToggleModal}>
          <Svg width="30" height="30">
            <use href={`${sprite}#icon-filter-solid`} />
          </Svg>
        </AvancedFilters>
      </Wrap>
      {showModal && (
        <Modal onCloseModal={handleToggleModal}>
          <div>Filters</div>
        </Modal>
      )}
    </>
  );
};
