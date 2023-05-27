import { useLocations } from 'hooks/useLocations';
import { StyledH2 } from 'modules/Library/Library.styled';
import { Loader } from 'shared/components/Loader';
import { StyledUl } from './LocationsList.styled';
import { LocationCard } from 'modules/Locations/components/LocationCard/LocationCard';
import { useLibrary } from 'hooks/useLibrary';
import { nothingonlist, oops } from 'shared/constants/errorText';
import { Error } from 'shared/components/Error';

export const LocationsList = () => {
  const { favLocationsIds } = useLibrary();
  const { locations, error, isLoading } = useLocations();

  const showResidentsBtn = true;
  const shouldRenderList = favLocationsIds.length > 0 && !error && !isLoading;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <StyledH2>Favourite locations</StyledH2>
      {isLoading && <Loader />}
      {shouldRenderList ? (
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
      ) : (
        <Error text={nothingonlist} />
      )}
      {shouldShowError && <Error text={oops} />}
    </>
  );
};
