import React, { useEffect, useState } from 'react';
import { getLocationById } from 'redux/location/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectlocation } from 'redux/location/selectors';
import {
  LocationCard,
  LocationCardDetails,
  StyledDiv,
  StyledH2,
  StyledH3,
  Detail,
  LocationChoose,
  StyledButton,
  Paragraph,
} from './LocationPicker.styled';
import { getRandomLocation } from 'shared/utils/getRandomLocation';
import sprite from '../../../../shared/icons/sprite.svg';

export const LocationPicker = () => {
  const [locationID, setLocationID] = useState(1);
  const [backgroundNum, setBackgroundNum] = useState(1);
  const dispatch = useDispatch();
  const location = useSelector(selectlocation);

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

  return (
    <StyledDiv>
      <LocationCard className={`location-card${backgroundNum}`}>
        <StyledH2>Location Data</StyledH2>
        {location !== null && (
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

        <StyledButton type="button" onClick={handleRandomBtn}>
          Random location
        </StyledButton>
      </LocationChoose>
    </StyledDiv>
  );
};
