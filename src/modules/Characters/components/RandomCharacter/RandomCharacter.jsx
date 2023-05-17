import { useEffect, useState } from 'react';
import { useCharacter } from 'hooks/useCharacter';
import { useDispatch } from 'react-redux';
import { RandomButton } from 'shared/components/RandomButton';
import { getCharacterById } from 'redux/character/thunks';
import { getRandomId } from 'shared/utils/getRandomId';
import { useCharacters } from 'hooks/useCharacters';
import { characters } from 'shared/constants/routes';
import { useLocation } from 'react-router';
import {
  CardWrap,
  Decoration,
  Randomazier,
  RicksText,
  SvgRick,
  Wrap,
} from './RandomCharacter.styled';
import { CardLoader } from '../CardLoader/CardLoader';
import { RandomCharacterInfo } from '../RandomCharacterInfo/RandomCharacterInfo';
import sprite from 'shared/icons/sprite.svg';

const FIRST_CHARACTER_ID = 1;

export const RandomCharacter = () => {
  const location = useLocation();
  const { info } = useCharacters();
  const { character, isLoading, error } = useCharacter();
  const persisredCharacterId = character?.id;

  const [id, setId] = useState(persisredCharacterId || FIRST_CHARACTER_ID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  const handleGetRandomCharacter = () => {
    const randomId = getRandomId({ max: info.count });
    setId(randomId);
  };

  const shouldShowCharacter = character !== null && !isLoading && !error;
  const shouldShowError = !isLoading && error;

  return (
    <Wrap>
      <Decoration>
        <CardWrap to={`/${characters}/${id}`} state={{ from: location }}>
          {isLoading && <CardLoader />}
          {shouldShowCharacter && <RandomCharacterInfo character={character} />}
          {shouldShowError && <div>Oops, something went wrong...</div>}
        </CardWrap>
      </Decoration>
      <Randomazier>
        <SvgRick width="100" height="100">
          <use href={`${sprite}#icons8-rick-sanchez`} />
        </SvgRick>
        <RicksText>Yeah, just get a random character ...whatever</RicksText>
        <RandomButton onClick={handleGetRandomCharacter} isLoading={isLoading}>
          <span>Random Character</span>
        </RandomButton>
      </Randomazier>
    </Wrap>
  );
};
