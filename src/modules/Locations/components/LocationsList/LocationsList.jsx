import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationsByFilter } from 'redux/locations/thunks';
import { LocationCard } from '../LocationCard/LocationCard';
import { Pagination } from 'shared/components/Pagination';
import { StyledH2, StyledUl } from './LocationsList.styled';
import { useSearchParams } from 'react-router-dom';
import { useLocations } from 'hooks/useLocations';
import { Loader } from 'shared/components/Loader';
import { ResultsNotFound } from 'shared/components/ResultsNotFound';
import { getSearchValues } from 'shared/utils/getSearchValues';

export const PARAMS_ARR = ['name', 'type', 'dimension'];

export const LocationsList = () => {
  const [searchParams] = useSearchParams();
  const { info, locations, error, isLoading } = useLocations();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const showResidentsBtn = true;

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    dispatch(
      getLocationsByFilter({
        page,
        ...getSearchValues(PARAMS_ARR, searchParams),
      })
    );
  }, [dispatch, page, searchParams]);

  const shouldRenderList = locations.length > 0 && !error;
  const shouldShowError = !isLoading && error && error.status !== 404;
  const shouldShowNotFoundError = !isLoading && error && error.status === 404;
  const shouldRenderPagination =
    !error && locations.length > 0 && info?.pages > 1;

  return (
    <>
      <StyledH2>All locations</StyledH2>
      {isLoading && <Loader />}
      {shouldRenderList && (
        <StyledUl>
          {locations.map(location => (
            <li key={location.id}>
              <LocationCard
                location={location}
                resident={location.residents[0]}
                showResidentsBtn={showResidentsBtn}
              />
            </li>
          ))}
        </StyledUl>
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
