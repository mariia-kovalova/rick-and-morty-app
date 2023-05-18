import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { CharacterCardWrap } from './Character.styled';
import { CardDecoration } from 'shared/styles/components/CardDecoration.styled';
import { CharacterInfo } from '../CharacterInfo/CharacterInfo';

export const Character = ({ isLoading, ...rest }) => {
  return (
    <>
      <CardDecoration>
        <CharacterCardWrap>
          {isLoading ? (
            <CardLoader />
          ) : (
            <>
              <CharacterInfo {...rest} />
            </>
          )}
        </CharacterCardWrap>
      </CardDecoration>
    </>
  );
};
