import { useEffect, useState } from 'react';
import { useCharacter } from 'hooks/useCharacter';
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

const FIRST_CHARACTER_ID = 1;

export const RandomCharacter = () => {
  const location = useLocation();
  const { info } = useCharacters();
  const { character, isLoading, error } = useCharacter();
  const persisredCharacterId = character?.id;

  const [id, setId] = useState(persisredCharacterId || FIRST_CHARACTER_ID);
  const dispatch = useDispatch();

  const { species, gender, origin, location: characterLocation } = character;

  const characterInfo = [
    { label: 'species', data: species },
    { label: 'gender', data: gender },
    { label: 'origin', data: origin.name },
    { label: 'location', data: characterLocation.name },
  ];

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  const handleGetRandomCharacter = () => {
    const randomId = getRandomId({ max: info.count });
    setId(randomId);
  };

  const shouldShowCharacter = character !== null && !error;

  return (
    <Wrap>
      <StyledLink to={`/${characters}/${id}`} state={{ from: location }}>
        {shouldShowCharacter && (
          <Character
            character={character}
            info={characterInfo}
            isLoading={isLoading}
          />
        )}
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
