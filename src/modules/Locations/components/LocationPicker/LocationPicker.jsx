import React, { useEffect, useState } from 'react';
import { getLocationById } from 'redux/location/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectlocation } from 'redux/location/selectors';
import { StyledDiv } from './LocationPicker.styled';
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
      <div className={`location-card location-card${backgroundNum}`}>
        <h2>Location Data</h2>
        {location !== null && (
          <div className="location-card__details">
            <h3>{location.name}</h3>

            <p>Dimension: {location.dimension}</p>
            <p>Type: {location.type}</p>
            <p>Number of residents: {location.residents.length}</p>
          </div>
        )}
      </div>
      <div className="location-choose">
        <svg width="100" height="100">
          <use href={`${sprite}#icons8-rick-sanchez`} />
        </svg>
        <p>Yeah, just go to the random location ...whatever</p>

        <button type="button" onClick={handleRandomBtn}>
          Random location
        </button>
      </div>
    </StyledDiv>
  );
};
