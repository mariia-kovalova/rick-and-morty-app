import { useOneLocation } from 'hooks/useOneLocation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLocationById } from 'redux/location/thunks';
import {
  Detail,
  LocationCard,
  LocationCardDetails,
  StyledDiv,
  StyledH3,
} from './HomeRandomLocation.styled';
import { CardLoader } from 'shared/components/CardLoader';
import { Link } from 'react-router-dom';
import { locations } from 'shared/constants/routes';

export const HomeRandomLocation = ({ locationID, backgroundNum }) => {
  const dispatch = useDispatch();
  const { location, isLoading, error } = useOneLocation();

  useEffect(() => {
    dispatch(getLocationById(locationID));
  }, [dispatch, locationID]);

  const shouldShowLocation = location !== null && !isLoading && !error;

  return (
    <Link to={`/${locations}/${location.id}`}>
      <StyledDiv>
        <LocationCard className={`location-card${backgroundNum}`}>
          {isLoading && <CardLoader />}
          {shouldShowLocation && (
            <LocationCardDetails>
              <StyledH3>{location.name}</StyledH3>
              <Detail>
                Dimension:
                <span> {location.dimension}</span>
              </Detail>
              <Detail>
                Type:<span> {location.type}</span>
              </Detail>
              <Detail>
                Number of residents:
                <span> {location.residents.length}</span>
              </Detail>
            </LocationCardDetails>
          )}
        </LocationCard>
      </StyledDiv>
    </Link>
  );
};
