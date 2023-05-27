import { useEpisodes } from 'hooks/useEpisodes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getEpisodesByFilter } from 'redux/episodes/thunks';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { Item, List } from './EpisodeCardList.styled';
import { EpisodeCard } from '../EpisodeCard/EpisodeCard';
import { Loader } from 'shared/components/Loader';
import { Pagination } from 'shared/components/Pagination';
import { Error } from 'shared/components/Error';
import { notfound, oops } from 'shared/constants/errorText';

export const PARAMS_ARR = ['name', 'episode'];

export const EpisodeCardList = () => {
  const [searchParams] = useSearchParams();
  const { info, episodes, error, isLoading } = useEpisodes();
  const [page, setPage] = useState(1);
  const dispatchFunc = useDispatch();

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    dispatchFunc(
      getEpisodesByFilter({
        page,
        ...getSearchValues(PARAMS_ARR, searchParams),
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
      {shouldShowError && <Error text={oops} />}
      {shouldShowNotFoundError && <Error text={notfound} />}
    </>
  );
};
