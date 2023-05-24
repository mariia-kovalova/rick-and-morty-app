import { useEpisodes } from 'hooks/useEpisodes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisodesByFilter } from 'redux/episodes/thunks';
import { Loader } from 'shared/components/Loader';
import { Pagination } from 'shared/components/Pagination';
import { ResultsNotFound } from 'shared/components/ResultsNotFound';
import { EpisodeCard } from '../EpisodeCard/EpisodeCard';
import { useSearchParams } from 'react-router-dom';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { Item, List } from './EpisodeCardList.styled';

export const PARAMS_ARR = ['name', 'episode'];

export const EpisodeCardList = () => {
  const [searchParams] = useSearchParams();
  const { info, episodes, error, isLoading } = useEpisodes();
  const [page, setPage] = useState(1);
  const dispatchFunc = useDispatch();

  useEffect(() => {
    dispatchFunc(
      getEpisodesByFilter({
        page,
        ...getDefaultValues(PARAMS_ARR, searchParams),
      })
    );
  }, [dispatchFunc, page, searchParams]);

  const shouldRenderList = episodes.length > 0 && !error;
  const shouldShowError = !isLoading && error && error.status !== 404;
  const shouldShowNotFoundError = !isLoading && error && error.status === 404;
  const shouldRenderPagination =
    !error && episodes.length > 0 && info?.pages > 1;

  return (
    <>
      {isLoading && <Loader />}
      {shouldRenderList && (
        <List>
          {episodes.map(episode => (
            <Item key={episode.id}>
              <EpisodeCard episode={episode} />
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
      {shouldShowNotFoundError && <ResultsNotFound />}
    </>
  );
};
