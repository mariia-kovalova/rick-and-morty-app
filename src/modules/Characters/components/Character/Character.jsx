import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { CharacterCardWrap } from './Character.styled';
import { CardDecoration } from 'shared/styles/components/CardDecoration.styled';
import { CharacterInfo } from '../CharacterInfo/CharacterInfo';
import { useOneCharacter } from 'hooks/useOneCharacter';

export const Character = ({ ...rest }) => {
  const { isLoading, character } = useOneCharacter();
  return (
    <>
      <CardDecoration>
        <CharacterCardWrap>
          {isLoading ? (
            <CardLoader />
          ) : (
            <>
              <CharacterInfo character={character} {...rest} />
            </>
          )}
        </CharacterCardWrap>
      </CardDecoration>
    </>
  );
};
