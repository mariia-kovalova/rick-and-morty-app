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

export const CharacterInfo = ({ info = [], links = [], character }) => {
  const { id, name, status, image, isFavourire } = character;

  return (
    <>
      <MainInfo>
        <HeartWrap>
          <Heart
            id={id}
            isFavourire={isFavourire}
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
