import { useCharacters } from 'hooks/useCharacters';
import { useLibrary } from 'hooks/useLibrary';
import { CharacterCard } from 'modules/Characters/components/CharacterCard';
import { StyledH2 } from 'modules/Library/Library.styled';
import { CardsList } from 'shared/components/CardsList';
import { Error } from 'shared/components/Error';
import { Loader } from 'shared/components/Loader';
import { nothingonlist, oops } from 'shared/constants/errorText';

export const CharactersList = () => {
  const { favCharactersIds } = useLibrary();
  const { characters, isLoading, error } = useCharacters();

  const shouldRenderList = favCharactersIds.length > 0 && !error && !isLoading;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <StyledH2>Favourite characters</StyledH2>
      {isLoading && <Loader />}
      {shouldRenderList ? (
        <CardsList items={characters} element={CharacterCard} />
      ) : (
        <Error text={nothingonlist} />
      )}
      {shouldShowError && <Error text={oops} />}
    </>
  );
};
