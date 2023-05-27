import { useOneLocation } from 'hooks/useOneLocation';
import React, { useEffect, useState } from 'react';
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
  const [show, setShow] = useState(false);

  const shouldShowLocation = location !== null && !isLoading && !error;

  useEffect(() => {
    setShow(true);

    const timeout = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location, isLoading, error]);

  return (
    <StyledLink
      to={`/${locations}/${location?.id}`}
      className={show ? 'show' : ''}
    >
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
