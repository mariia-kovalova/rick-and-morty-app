import {
  CharacterInfoWrap,
  MobileInfoDecoration,
  Wrap,
} from './CharacterBlock.styled';
import { useOneCharacter } from 'hooks/useOneCharacter';
import { Character } from 'modules/Characters/components/Character/Character';
import { locations } from 'shared/constants/routes';
import { CardLoader } from 'shared/components/CardLoader/CardLoader';
import { CharacterInfoList } from '../CharacterInfoList/CharacterInfoList';

const NUMBER_OF_LETTER_TO_SKIP = 41;

export const CharacterBlock = () => {
  const { character, isLoading } = useOneCharacter();
  const { name, status, species, gender, origin, location } = character;
  const locationId = location.url.slice(NUMBER_OF_LETTER_TO_SKIP);

  const info = [
    { label: 'full name', data: status },
    { label: 'satus', data: name },
    { label: 'species', data: species },
    { label: 'gender', data: gender },
    { label: 'origin', data: origin.name },
  ];

  const links = [
    {
      label: 'location',
      data: location.name,
      path: `/${locations}/${locationId}`,
    },
  ];

  return (
    <Wrap>
      <Character info={info} links={links} />
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
