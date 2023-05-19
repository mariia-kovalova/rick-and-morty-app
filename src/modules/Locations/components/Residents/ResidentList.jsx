import { CharacterCard } from 'modules/Characters/components/CharacterCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCharactersItems } from 'redux/characters/selectors';
import { CardsList } from 'shared/components/CardsList';
import { StyledH2 } from './ResidentList.styled';

export const ResidentList = () => {
  const residents = useSelector(selectCharactersItems);

  return (
    <>
      <StyledH2>Residents</StyledH2>
      {residents.length > 0 ? (
        <CardsList items={residents} element={CharacterCard} />
      ) : (
        <p>It seems like no one is here... Go back and try another location</p>
      )}
    </>
  );
};
