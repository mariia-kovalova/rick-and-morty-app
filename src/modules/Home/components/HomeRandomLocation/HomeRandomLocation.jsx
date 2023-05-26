import { useOneLocation } from 'hooks/useOneLocation';
import React from 'react';
import {
  Detail,
  LocationCard,
  LocationCardDetails,
  StyledDiv,
  StyledH3,
  StyledLink,
} from './HomeRandomLocation.styled';
import { CardLoader } from 'shared/components/CardLoader';
import { locations } from 'shared/constants/routes';

export const HomeRandomLocation = ({ backgroundNum }) => {
  const { location, isLoading, error } = useOneLocation();
  const shouldShowLocation = location !== null && !isLoading && !error;

  return (
    <StyledLink to={`/${locations}/${location?.id}`}>
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
    </StyledLink>
  );
};
