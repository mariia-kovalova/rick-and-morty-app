import { CharacterCard } from 'modules/Characters/components/CharacterCard';
import React from 'react';
import { CardsList } from 'shared/components/CardsList';
import { StyledH2 } from './ResidentList.styled';
import { useCharacters } from 'hooks/useCharacters';

export const ResidentList = () => {
  const { characters } = useCharacters();

  return (
    <>
      <StyledH2>Residents</StyledH2>
      {characters.length > 0 ? (
        <CardsList items={characters} element={CharacterCard} />
      ) : (
        <p>It seems like no one is here... Go back and try another location</p>
      )}
    </>
  );
};
