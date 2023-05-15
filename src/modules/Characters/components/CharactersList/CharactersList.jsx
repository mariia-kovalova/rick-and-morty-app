import { CharacterCard } from 'shared/components/CharacterCard';
import { useCharacters } from 'hooks/useCharacters';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from 'redux/characters/thunks';
import { Pagination } from 'shared/components/Pagination';
import { Loader } from 'shared/components/Loader';
import { CardsList } from 'shared/components/CardsList';

export const CharactersList = () => {
  const { info, characters, isLoading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  const shouldRenderList = characters.length > 0 && !error;
  const shouldShowError = !isLoading && error;
  const shouldRenderPagination =
    !error && characters.length > 0 && info?.pages > 1;

  return (
    <>
      {isLoading && <Loader />}
      {shouldRenderList && (
        <CardsList items={characters} element={CharacterCard} />
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
