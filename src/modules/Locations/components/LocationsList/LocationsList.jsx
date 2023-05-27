import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationsByFilter } from 'redux/locations/thunks';
import { LocationCard } from '../LocationCard/LocationCard';
import { Pagination } from 'shared/components/Pagination';
import { StyledH2, StyledLink, StyledUl } from './LocationsList.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useLocations } from 'hooks/useLocations';
import { Loader } from 'shared/components/Loader';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { locations as locationsRoute } from 'shared/constants/routes';
import { Error } from 'shared/components/Error';
import { notfound, oops } from 'shared/constants/errorText';

export const PARAMS_ARR = ['name', 'type', 'dimension'];

export const LocationsList = () => {
  const [showList, setShowList] = useState(false);
  const [searchParams] = useSearchParams();
  const locationPath = useLocation();
  const { info, locations, error, isLoading } = useLocations();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const showResidentsBtn = true;

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    const getInfo = async () => {
      await dispatch(
        getLocationsByFilter({
          page,
          ...getSearchValues(PARAMS_ARR, searchParams),
        })
      ).unwrap();
      setShowList(true);
    };

    getInfo();
  }, [dispatch, page, searchParams]);

  const shouldRenderList = locations.length > 0 && !error && showList;
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
              <StyledLink
                to={`/${locationsRoute}/${location.id}`}
                state={{ from: locationPath }}
              >
                <LocationCard
                  location={location}
                  resident={location.residents[0]}
                  showResidentsBtn={showResidentsBtn}
                />
              </StyledLink>
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
      {shouldShowError && <Error text={oops} />}
      {shouldShowNotFoundError && <Error text={notfound} />}
    </>
  );
};
