import { CharacterCard } from 'shared/components/CharacterCard';
import { Item, List } from './CharactersList.styled';
import { useCharacters } from 'hooks/useCharacters';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from 'redux/characters/thunks';
import { Pagination } from 'shared/components/Pagination';
import { Loader } from 'shared/components/Loader';

export const CharactersList = () => {
  const { info, characters, isLoading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  const shouldRenderList = characters.length > 0 && !error;
  const shouldShowError = !isLoading > 0 && error;
  const shouldRenderPagination =
    !error && characters.length > 0 && info !== null && info.pages > 1;

  return (
    <>
      {isLoading && <Loader />}
      {shouldRenderList && (
        <List>
          {characters.map(character => (
            <Item key={character.id}>
              <CharacterCard character={character} />
            </Item>
          ))}
        </List>
      )}
      {shouldRenderPagination && (
        <Pagination
          totalPages={info.pages}
          onPageChange={setPage}
          page={page}
        />
      )}
      {shouldShowError && <div>Oops, something went wrong </div>}
    </>
  );
};
