import {
  CharacterCardWrap,
  MobileInfoDecoration,
  Wrap,
} from './CharacterBlock.styled';
import { useCharacter } from 'hooks/useCharacter';
import { Character } from 'modules/Characters/components/Character/Character';
import { home } from 'shared/constants/routes';
import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { CharacterInfoList } from '../CharacterInfoList/CharacterInfoList';

export const CharacterBlock = () => {
  const { character, isLoading } = useCharacter();
  const { species, gender, origin, location } = character;

  const info = [
    { label: 'species', data: species },
    { label: 'gender', data: gender },
    { label: 'origin', data: origin.name },
  ];

  const links = [
    { label: 'location', data: location.name, path: home },
    // link to location page
    { label: 'episodes', data: 'See episodes', path: home },
    // link to episodes list on this page
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
        <CharacterCardWrap>
          {isLoading ? (
            <CardLoader />
          ) : (
            <CharacterInfoList info={info} links={links} isMobile={true} />
          )}
        </CharacterCardWrap>
      </MobileInfoDecoration>
    </Wrap>
  );
};
