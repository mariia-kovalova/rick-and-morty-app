import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLocationsInfo,
  selectLocationsItems,
} from 'redux/locations/selectors';
import { getLocations } from 'redux/locations/thunks';
import { LocationCard } from '../LocationCard/LocationCard';
import { Pagination } from 'shared/components/Pagination';
import { StyledH2, StyledUl } from './LocationsList.styled';

export const LocationsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const locations = useSelector(selectLocationsItems);
  const locationsInfo = useSelector(selectLocationsInfo);

  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch, page]);

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
              />
            </li>
          ))}
      </StyledUl>
      {locationsInfo && (
        <Pagination
          page={page}
          totalPages={locationsInfo.pages}
          onPageChange={setPage}
        />
      )}
    </>
  );
};
