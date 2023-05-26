import { useEffect, useState } from 'react';
import { useOneCharacter } from 'hooks/useOneCharacter';
import { useDispatch } from 'react-redux';
import { RandomButton } from 'shared/components/RandomButton';
import { getCharacterById } from 'redux/character/thunks';
import { getRandomId } from 'shared/utils/getRandomId';
import { useCharacters } from 'hooks/useCharacters';
import { characters } from 'shared/constants/routes';
import { useLocation } from 'react-router';
import { Randomazier, StyledLink, Wrap } from './RandomCharacter.styled';
import { RickForRandomizer } from 'shared/components/RickForRandomizer';
import { desktop } from 'shared/constants/deviceSizes';
import { Character } from 'modules/Characters/components/Character/Character';
import { addToLibrary } from 'redux/library/slice';
import { randomcharacters } from 'shared/constants/libaryListName';
import audioTeleport from 'shared/audio/teleport-sound-5.mp3'

const FIRST_CHARACTER_ID = 1;

export const RandomCharacter = () => {
  const location = useLocation();
  const { info } = useCharacters();
  const { character, isLoading, error } = useOneCharacter();
  const [id, setId] = useState(character?.id ?? FIRST_CHARACTER_ID);
  const dispatch = useDispatch();

  const characterInfo = [
    { label: 'full name', data: character !== null ? character.name : '' },
    { label: 'species', data: character !== null ? character.species : '' },
    { label: 'gender', data: character !== null ? character.gender : '' },
    { label: 'origin', data: character !== null ? character.origin.name : '' },
    {
      label: 'location',
      data: character !== null ? character.location.name : '',
    },
  ];

  useEffect(() => {
    dispatch(getCharacterById(id));
    dispatch(addToLibrary({ libraryListName: randomcharacters, id }));
  }, [dispatch, id]);

  const handleGetRandomCharacter = () => {
    const audio = new Audio(audioTeleport);
    audio.play();
    const randomId = getRandomId({ max: info.count });
    setId(randomId);
  };

  const shouldShowCharacter = character !== null && !error;

  return (
    <Wrap>
      <StyledLink to={`/${characters}/${id}`} state={{ from: location }}>
        {shouldShowCharacter && <Character info={characterInfo} />}
      </StyledLink>
      <Randomazier>
        <RickForRandomizer showOnDeviceWidth={desktop} />
        <RandomButton onClick={handleGetRandomCharacter} isLoading={isLoading}>
          Random Character
        </RandomButton>
      </Randomazier>
    </Wrap>
  );
};
