import { StyledDiv, StyledH1 } from 'pages/LocationsPage/LocationsPage.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectlocation } from 'redux/location/selectors';
import { getLocationById } from 'redux/location/thunks';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';

export const Locations = () => {
  const [locationID, setLocationID] = useState(1);
  const [backgroundNum, setBackgroundNum] = useState(1);
  const dispatch = useDispatch();
  const location = useSelector(selectlocation);

  const handleRandomBtn = () => {
    const rndLocationID = Math.floor(Math.random() * 126) + 1;
    setLocationID(rndLocationID);
    const rndbackgroundNum = Math.floor(Math.random() * 3) + 1;
    setBackgroundNum(rndbackgroundNum);
  };

  useEffect(() => {
    dispatch(getLocationById(locationID));
    // console.log(location);
  }, [dispatch, locationID]);

  return (
    <Section className="location-page">
      <Container>
        <StyledH1>Locations</StyledH1>
        <StyledDiv className="container-choosingData">
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
            <p>Try random location or choose location from the list</p>
            <button type="button" onClick={handleRandomBtn}>
              Random location
            </button>
            <p>drop-down list</p>
          </div>
        </StyledDiv>
        <div>Residents</div>
      </Container>
    </Section>
  );
};
