import { characterNameNormalize } from 'shared/utils/nameNormalize';
import { CharacterStatus } from '../CharacterStatus/CharacterStatus';
import { CharacterInfoList } from '../CharacterInfoList/CharacterInfoList';
import {
  HeartWrap,
  Img,
  MainInfo,
  Name,
  NameWrap,
  StyledNumber,
} from './CharacterInfo.styled';
import { Heart } from 'shared/components/Heart';
import { favcharacters } from 'shared/constants/libaryListName';
import { useOneCharacter } from 'hooks/useOneCharacter';

export const CharacterInfo = ({ info = [], links = [] }) => {
  const {
    character: { id, name, status, image, isFavourite },
  } = useOneCharacter();

  return (
    <>
      <MainInfo>
        <HeartWrap>
          <Heart
            id={id}
            isFavourite={isFavourite}
            libraryListName={favcharacters}
          />
        </HeartWrap>
        <StyledNumber>#{id}</StyledNumber>
        <Img src={image} width="235" height="235" alt={name} loading="lazy" />
        <NameWrap>
          <CharacterStatus status={status} animate={true} />
          <Name>{characterNameNormalize(name)}</Name>
        </NameWrap>
      </MainInfo>
      <CharacterInfoList info={info} links={links} />
    </>
  );
};
