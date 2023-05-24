import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacters } from 'hooks/useCharacters';
import { useDispatch } from 'react-redux';
import { getCharactersByFilter } from 'redux/characters/thunks';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { Pagination } from 'shared/components/Pagination';
import { Loader } from 'shared/components/Loader';
import { CardsList } from 'shared/components/CardsList';
import { ResultsNotFound } from 'shared/components/ResultsNotFound';
import { CharacterCard } from '../CharacterCard';

export const PARAMS_ARR = ['name', 'status', 'gender'];

export const CharactersList = () => {
  const [searchParams] = useSearchParams();
  const { info, characters, isLoading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    dispatch(
      getCharactersByFilter({
        page,
        ...getSearchValues(PARAMS_ARR, searchParams),
      })
    );
  }, [dispatch, page, searchParams]);

  const shouldRenderList = characters.length > 0 && !error;
  const shouldShowError = !isLoading && error && error.status !== 404;
  const shouldShowNotFoundError = !isLoading && error && error.status === 404;
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
      {shouldShowNotFoundError && <ResultsNotFound />}
    </>
  );
};
