import React, { useEffect, useState } from 'react';
import { getLocationById } from 'redux/location/thunks';
import { useDispatch } from 'react-redux';

import {
  LocationCard,
  LocationCardDetails,
  StyledDiv,
  StyledH2,
  StyledH3,
  Detail,
  LocationChoose,
  Paragraph,
} from './LocationPicker.styled';
import { getRandomLocation } from 'shared/utils/getRandomLocation';
import sprite from '../../../../shared/icons/sprite.svg';
import { RandomButton } from 'shared/components/RandomButton';
import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { useOneLocation } from 'hooks/useOneLocation';
import { Link, useLocation } from 'react-router-dom';
import { locations } from 'shared/constants/routes';
import { addToLibrary } from 'redux/library/slice';
import { randomlocations } from 'shared/constants/libaryListName';

const FIRST_LOCATION_ID = 1;

export const LocationPicker = () => {
  const [backgroundNum, setBackgroundNum] = useState(1);
  const dispatch = useDispatch();
  const { location, isLoading, error } = useOneLocation();
  const [locationID, setLocationID] = useState(
    location?.id ?? FIRST_LOCATION_ID
  );
  const locationPath = useLocation();

  // Random button click
  const handleRandomBtn = () => {
    const rndLocationID = getRandomLocation();
    setLocationID(rndLocationID);

    //   for card background
    const rndbackgroundNum = Math.floor(Math.random() * 3) + 1;
    setBackgroundNum(rndbackgroundNum);
  };

  useEffect(() => {
    dispatch(getLocationById(locationID));
    dispatch(
      addToLibrary({ libraryListName: randomlocations, id: locationID })
    );
  }, [dispatch, locationID]);

  const shouldShowLocation = location !== null && !isLoading && !error;

  return (
    <StyledDiv>
      <LocationCard className={`location-card${backgroundNum}`}>
        <StyledH2>Location Data</StyledH2>
        {isLoading && <CardLoader />}
        {shouldShowLocation && (
          <LocationCardDetails>
            <Link
              to={`/${locations}/${location.id}`}
              state={{ from: locationPath }}
            >
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
            </Link>
          </LocationCardDetails>
        )}
      </LocationCard>
      <LocationChoose className="location-choose">
        <svg width="100" height="100">
          <use href={`${sprite}#icons8-rick-sanchez`} />
        </svg>
        <Paragraph>Yeah, just go to the random location ...whatever</Paragraph>

        <RandomButton
          className="locationBtn"
          type="button"
          onClick={handleRandomBtn}
          isLoading={isLoading}
        >
          Random location
        </RandomButton>
      </LocationChoose>
    </StyledDiv>
  );
};
