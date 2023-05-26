import { useCharacters } from 'hooks/useCharacters';
import { useLibrary } from 'hooks/useLibrary';
import { CharacterCard } from 'modules/Characters/components/CharacterCard';
import { StyledH2 } from 'modules/Library/Library.styled';
import { CardsList } from 'shared/components/CardsList';
import { Loader } from 'shared/components/Loader';

export const CharactersList = () => {
  const { favCharactersIds } = useLibrary();
  const { characters, isLoading, error } = useCharacters();

  const shouldRenderList = favCharactersIds.length > 0 && !error;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <StyledH2>Favourite characters</StyledH2>
      {isLoading && <Loader />}
      {shouldRenderList ? (
        <CardsList items={characters} element={CharacterCard} />
      ) : (
        <div>There is nothing on this list</div>
      )}
      {shouldShowError && <div>Oops, something went wrong </div>}
    </>
  );
};