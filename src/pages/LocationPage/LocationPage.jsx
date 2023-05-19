import { useOneLocation } from 'hooks/useOneLocation';
import { LocationCard } from 'modules/Locations/components/LocationCard/LocationCard';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getLocationById } from 'redux/location/thunks';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { nameNormalize } from 'shared/utils/nameNormalize';

const LocationPage = () => {
  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();
  const { location, isLoading, error } = useOneLocation();

  useEffect(() => {
    dispatch(getLocationById(params.locationId));
  }, [dispatch, params]);

  const shouldShowLocation = location !== null && !isLoading && !error;

  return (
    <>
      <Helmet>
        <title>
          {isLoading
            ? error && 'Character'
            : !error && nameNormalize(location?.name)}
        </title>
      </Helmet>
      <Section>
        <Container>
          {shouldShowLocation && (
            <LocationCard
              location={location}
              resident={location.residents[0]}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default LocationPage;
