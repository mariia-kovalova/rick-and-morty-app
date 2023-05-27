import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacters } from 'hooks/useCharacters';
import { useDispatch } from 'react-redux';
import { getCharactersByFilter } from 'redux/characters/thunks';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { Pagination } from 'shared/components/Pagination';
import { Loader } from 'shared/components/Loader';
import { CardsList } from 'shared/components/CardsList';
import { Error } from 'shared/components/Error';
import { CharacterCard } from '../CharacterCard';
import { gender, name, status } from 'shared/constants/charFilterTypes';
import { notfound, oops } from 'shared/constants/errorText';

export const PARAMS_ARR = [name, status, gender];

export const CharactersList = () => {
  const [showList, setShowList] = useState(false);
  const [searchParams] = useSearchParams();
  const { info, characters, isLoading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    const getInfo = async () => {
      await dispatch(
        getCharactersByFilter({
          page,
          ...getSearchValues(PARAMS_ARR, searchParams),
        })
      ).unwrap();
      setShowList(true);
    };

    getInfo();
  }, [dispatch, page, searchParams]);

  const shouldRenderList = characters.length > 0 && !error && showList;
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
      {shouldShowError && <Error text={oops} />}
      {shouldShowNotFoundError && <Error text={notfound} />}
    </>
  );
};
