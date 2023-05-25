import { useLocations } from 'hooks/useLocations';
import { StyledH2 } from 'modules/Library/Library.styled';
import { Loader } from 'shared/components/Loader';
import { StyledUl } from './LocationsList.styled';
import { LocationCard } from 'modules/Locations/components/LocationCard/LocationCard';

export const LocationsList = () => {
  const { locations, error, isLoading } = useLocations();
  const showResidentsBtn = true;

  const shouldRenderList = locations.length > 0 && !error;
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
        <div>There is nothing on this list</div>
      )}
      {shouldShowError && <div>Oops, something went wrong </div>}
    </>
  );
};
