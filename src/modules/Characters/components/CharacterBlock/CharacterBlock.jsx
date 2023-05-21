import {
  CharacterInfoWrap,
  MobileInfoDecoration,
  Wrap,
} from './CharacterBlock.styled';
import { useOneCharacter } from 'hooks/useOneCharacter';
import { Character } from 'modules/Characters/components/Character/Character';
import { home } from 'shared/constants/routes';
import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { CharacterInfoList } from '../CharacterInfoList/CharacterInfoList';

export const CharacterBlock = () => {
  const { character, isLoading } = useOneCharacter();
  const { name, status, species, gender, origin, location } = character;

  const info = [
    { label: 'full name', data: status },
    { label: 'satus', data: name },
    { label: 'species', data: species },
    { label: 'gender', data: gender },
    { label: 'origin', data: origin.name },
  ];

  const links = [
    { label: 'location', data: location.name, path: home },
    // link to location page
  ];

  return (
    <Wrap>
      <Character
        character={character}
        info={info}
        links={links}
        isLoading={isLoading}
      />
      <MobileInfoDecoration>
        <CharacterInfoWrap>
          {isLoading ? (
            <CardLoader />
          ) : (
            <CharacterInfoList info={info} links={links} isMobile={true} />
          )}
        </CharacterInfoWrap>
      </MobileInfoDecoration>
    </Wrap>
  );
};
