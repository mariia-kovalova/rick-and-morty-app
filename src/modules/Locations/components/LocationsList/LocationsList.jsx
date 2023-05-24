import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationsByFilter } from 'redux/locations/thunks';
import { LocationCard } from '../LocationCard/LocationCard';
import { Pagination } from 'shared/components/Pagination';
import { StyledH2, StyledUl } from './LocationsList.styled';
import { useSearchParams } from 'react-router-dom';
import { useLocations } from 'hooks/useLocations';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

export const PARAMS_ARR = ['name', 'type', 'dimension'];

export const LocationsList = () => {
  const [searchParams] = useSearchParams();
  const { info, locations } = useLocations();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const showResidentsBtn = true;

  useEffect(() => {
    dispatch(
      getLocationsByFilter({
        page,
        ...getDefaultValues(PARAMS_ARR, searchParams),
      })
    );
  }, [dispatch, page, searchParams]);

  return (
    <>
      <StyledH2>All locations</StyledH2>
      <StyledUl>
        {locations !== null &&
          locations.map(location => (
            <li key={location.id}>
              <LocationCard
                location={location}
                resident={location.residents[0]}
                showResidentsBtn={showResidentsBtn}
              />
            </li>
          ))}
      </StyledUl>
      {info && (
        <Pagination
          page={page}
          totalPages={info.pages}
          onPageChange={setPage}
        />
      )}
    </>
  );
};
