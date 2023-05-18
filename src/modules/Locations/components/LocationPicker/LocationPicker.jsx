import React, { useEffect, useState } from 'react';
import { getLocationById } from 'redux/location/thunks';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectlocation,
  selectlocationError,
  selectlocationIsLoading,
} from 'redux/location/selectors';
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

export const LocationPicker = () => {
  const [locationID, setLocationID] = useState(1);
  const [backgroundNum, setBackgroundNum] = useState(1);
  const dispatch = useDispatch();
  const location = useSelector(selectlocation);
  const isLoading = useSelector(selectlocationIsLoading);
  const error = useSelector(selectlocationError);

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
  }, [dispatch, locationID]);

  const shouldShowLocation = location !== null && !isLoading && !error;

  return (
    <StyledDiv>
      <LocationCard className={`location-card${backgroundNum}`}>
        <StyledH2>Location Data</StyledH2>
        {isLoading && <CardLoader />}
        {shouldShowLocation && (
          <LocationCardDetails>
            <StyledH3>{location.name}</StyledH3>
            <Detail>
              Dimension:
              <p> {location.dimension}</p>
            </Detail>
            <Detail>
              Type:<p> {location.type}</p>
            </Detail>
            <Detail>
              Number of residents:
              <p> {location.residents.length}</p>
            </Detail>
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
        >
          Random location
        </RandomButton>
      </LocationChoose>
    </StyledDiv>
  );
};
