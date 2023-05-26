import { useOneCharacter } from 'hooks/useOneCharacter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getCharacterById } from 'redux/character/thunks';
import {
  CardDecoration,
  CharacterCardWrap,
  Img,
  MainInfo,
  Name,
  NameWrap,
  StyledLink,
  Wrap,
} from './HomeRandomCharacter.styled';
import { characters } from 'shared/constants/routes';
import { CardLoader } from 'shared/components/CardLoader';
import { CharacterStatus } from 'modules/Characters/components/CharacterStatus/CharacterStatus';
import { characterNameNormalize } from 'shared/utils/nameNormalize';

export const HomeRandomCharacter = ({ characterID }) => {
  const location = useLocation();
  const { character, error, isLoading } = useOneCharacter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterById(characterID));
  }, [dispatch, characterID]);

  const shouldShowCharacter = character !== null && !error;

  return (
    <Wrap>
      <StyledLink
        to={`/${characters}/${characterID}`}
        state={{ from: location }}
      >
        {shouldShowCharacter && (
          <CardDecoration>
            <CharacterCardWrap>
              {isLoading ? (
                <CardLoader />
              ) : (
                <MainInfo>
                  <Img
                    src={character.image}
                    width="235"
                    height="235"
                    alt={character.name}
                    loading="lazy"
                  />
                  <NameWrap>
                    <CharacterStatus status={character.status} animate={true} />
                    <Name>{characterNameNormalize(character.name)}</Name>
                  </NameWrap>
                </MainInfo>
              )}
            </CharacterCardWrap>
          </CardDecoration>
        )}
      </StyledLink>
    </Wrap>
  );
};