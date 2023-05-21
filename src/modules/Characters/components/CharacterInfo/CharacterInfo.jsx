import { characters } from 'shared/constants/libaryListName';
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

export const CharacterInfo = ({ info = [], links = [], character }) => {
  const { id, name, status, image } = character;

  return (
    <>
      <MainInfo>
        <HeartWrap>
          <Heart isFavourire={false} libraryListName={characters} />
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
