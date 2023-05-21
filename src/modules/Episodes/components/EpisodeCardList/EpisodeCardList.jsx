import { useEpisodes } from 'hooks/useEpisodes';
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { getEpisodes } from 'redux/episodes/thunks';
import { CardsList } from 'shared/components/CardsList';
import { Loader } from 'shared/components/Loader';
import { Pagination } from 'shared/components/Pagination';
import { ResultsNotFound } from 'shared/components/ResultsNotFound';
import EpisodeCard from '../EpisodeCard/EpisodeCard';

const EpisodeCardList = () => {
  const [page, setPage] = useState(1);
  const {episodes, info, error, isLoading} = useEpisodes()
  const funcDispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    funcDispatch(getEpisodes(page))
  }, [funcDispatch, page]);

  const shouldRenderList = episodes.length > 0 && !error;
  const shouldShowError = !isLoading && error && error.status !== 404;
  const shouldShowNotFoundError = !isLoading && error && error.status === 404;
  const shouldRenderPagination =
    !error && episodes.length > 0 && info?.pages > 1;

  
  return (
    <>
    {isLoading && <Loader/>}
      {shouldRenderList && <CardsList items={episodes} element={EpisodeCard}/>}
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

export default EpisodeCardList;
