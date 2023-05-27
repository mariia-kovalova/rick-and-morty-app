import { Container } from 'shared/styles/components/Container.styled';
import {
  About,
  HiddenTittle,
  RandomContainer,
  StyledDiv,
  TeleportElement,
} from './Home.styled';
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
import { addToLibrary } from 'redux/library/slice';
import {
  randomcharacters,
  randomlocations,
} from 'shared/constants/libaryListName';
import { useOneLocation } from 'hooks/useOneLocation';
import { getCharacterById } from 'redux/character/thunks';
import { getLocationById } from 'redux/location/thunks';
// import randomSound from 'shared/audio/teleport-sound-1.mp3';
import { Tooltip } from 'shared/components/ToolTip';
import { Modal } from 'shared/components/Modal';
import { GameRules } from './components/GameRules/GameRules';

const FIRST_CHARACTER_ID = 1;
const FIRST_LOCATION_ID = 1;
const ABOUT = 'find out more about the website';

export const Home = () => {
  const { location } = useOneLocation();
  const [locationID, setLocationID] = useState(
    location?.id ?? FIRST_LOCATION_ID
  );
  const { character } = useOneCharacter();
  const [characterID, setCharacterID] = useState(
    character?.id ?? FIRST_CHARACTER_ID
  );
  const [storyTextID, setStoryTextID] = useState(0);
  const [backgroundNum, setBackgroundNum] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const { info } = useCharacters();
  const dispatch = useDispatch();

  // Random button click
  const handleRandomBtn = () => {
    const audio = new Audio(randomSound);
    audio.play();
    const rndLocationID = getRandomLocation();
    setLocationID(rndLocationID);

    const randomId = getRandomId({ max: info.count });
    setCharacterID(randomId);

    const textID = getRandomId({ max: 25 });
    setStoryTextID(textID);
    //   for card background
    const rndbackgroundNum = Math.floor(Math.random() * 3) + 1;
    setBackgroundNum(rndbackgroundNum);

    dispatch(
      addToLibrary({ libraryListName: randomlocations, id: locationID })
    );
    dispatch(
      addToLibrary({ libraryListName: randomcharacters, id: characterID })
    );
  };

  const handleToggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCharacterById(characterID));
    dispatch(getLocationById(locationID));
  }, [dispatch, characterID, locationID]);

  return (
    <Section>
      <HiddenTittle>Rick and Morty Teleport</HiddenTittle>
      <Container>
        <StyledDiv className="container">
          <Tooltip text={ABOUT}>
            <About onClick={handleToggleModal}>About project</About>
          </Tooltip>

          <RandomContainer>
            <HomeRandomCharacter characterID={characterID} />
            <TeleportElement className="button-wrap">
              <button
                type="button"
                className="clicker"
                onClick={handleRandomBtn}
              >
                ☀
              </button>
              <div className="circle"></div>
            </TeleportElement>
            <HomeRandomLocation backgroundNum={backgroundNum} />
          </RandomContainer>

          <Stories storyTextID={storyTextID} />

          {showModal && (
            <Modal onCloseModal={handleToggleModal}>
              <GameRules />
            </Modal>
          )}
        </StyledDiv>
      </Container>
    </Section>
  );
};
