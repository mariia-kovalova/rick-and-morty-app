import { useOneLocation } from 'hooks/useOneLocation';
import { LocationCard } from 'modules/Locations/components/LocationCard/LocationCard';
import { ResidentList } from 'modules/Locations/components/Residents/ResidentList';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getCharactersByIds } from 'redux/characters/thunks';
import { getLocationById } from 'redux/location/thunks';
import { Error } from 'shared/components/Error';
import { GoBackLink } from 'shared/components/GoBackLink/GoBackLink';
import { Loader } from 'shared/components/Loader';
import { notfound, oops } from 'shared/constants/errorText';
import { home } from 'shared/constants/routes';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { scrollUp } from 'shared/utils/scrollUp';

const NUMBER_OF_LETTER_TO_SKIP = 42;

const LocationPage = () => {
  const [showList, setShowList] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const { location, isLoading, error } = useOneLocation();

  const locationPath = useLocation();

  const path = locationPath.state?.from ?? home;

  useEffect(() => {
    scrollUp(0);
    const getInfo = async () => {
      await dispatch(getLocationById(params.locationId)).unwrap();
      setShowList(true);
    };

    getInfo();
  }, [dispatch, params]);

  useEffect(() => {
    const residentsID = location.residents.map(resident =>
      resident.slice(NUMBER_OF_LETTER_TO_SKIP)
    );

    dispatch(getCharactersByIds(residentsID));
  }, [dispatch, location]);

  const shouldShowCard = location !== null && !error;
  const shouldShowError = !isLoading && error && error.status !== 404;
  const shouldShowNotFoundError = !isLoading && error && error.status === 404;
  const shouldShowResidentsList = !error && showList && !isLoading;

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
          <GoBackLink to={path} />
        </Container>
      </Section>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {shouldShowCard && (
            <LocationCard
              location={location}
              resident={location.residents[0]}
            />
          )}
          {shouldShowError && <Error text={oops} />}
          {shouldShowNotFoundError && <Error text={notfound} />}
        </Container>
      </Section>

      {shouldShowResidentsList && (
        <Section>
          <Container>
            <ResidentList />
          </Container>
        </Section>
      )}
    </>
  );
};

export default LocationPage;
