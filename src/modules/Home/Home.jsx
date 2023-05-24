import { Container } from 'shared/styles/components/Container.styled';
import { HiddenTittle, RandomContainer, StyledDiv } from './Home.styled';
import { Stories } from './components/Stories/Stories';
import { HomeRandomLocation } from './components/HomeRandomLocation/HomeRandomLocation';
import { useEffect, useState } from 'react';
import { getRandomLocation } from 'shared/utils/getRandomLocation';
import { HomeRandomCharacter } from './components/HomeRandomCharacter/HomeRandomCharacter';
import { getRandomId } from 'shared/utils/getRandomId';
import { useCharacters } from 'hooks/useCharacters';
import { useOneCharacter } from 'hooks/useOneCharacter';
import { Section } from 'shared/styles/components/Section.styled';
import { getCharacters } from 'redux/characters/thunks';
import { useDispatch } from 'react-redux';

const FIRST_CHARACTER_ID = 1;

export const Home = () => {
  const [locationID, setLocationID] = useState(1);
  const { character } = useOneCharacter();
  const [characterID, setCharacterID] = useState(
    character?.id ?? FIRST_CHARACTER_ID
  );
  const [storyTextID, setStoryTextID] = useState(0);
  const [backgroundNum, setBackgroundNum] = useState(1);

  const { info } = useCharacters();
  const dispatch = useDispatch();

  // Random button click
  const handleRandomBtn = () => {
    const rndLocationID = getRandomLocation();
    setLocationID(rndLocationID);

    const randomId = getRandomId({ max: info.count });
    setCharacterID(randomId);

    const textID = getRandomId({ max: 25 });
    console.log(textID);
    setStoryTextID(textID);
    //   for card background
    const rndbackgroundNum = Math.floor(Math.random() * 3) + 1;
    setBackgroundNum(rndbackgroundNum);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <Section>
      <HiddenTittle>Rick and Morty Teleport</HiddenTittle>
      <Container>
        <StyledDiv className="container">
          <RandomContainer>
            <HomeRandomCharacter characterID={characterID} />
            <div className="button-wrap">
              <button
                type="button"
                className="clicker"
                onClick={handleRandomBtn}
              >
                ☀
              </button>
              <div className="circle"></div>
            </div>
            <HomeRandomLocation
              locationID={locationID}
              backgroundNum={backgroundNum}
            />
          </RandomContainer>

          <Stories storyTextID={storyTextID} />
        </StyledDiv>
      </Container>
    </Section>
  );
};
