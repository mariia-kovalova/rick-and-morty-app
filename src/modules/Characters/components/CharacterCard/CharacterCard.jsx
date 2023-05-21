import { characters } from 'shared/constants/routes';
import { useLocation } from 'react-router';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { spiecesNormalize } from 'shared/utils/spiecesNormalize';
import { CharacterStatus } from '../CharacterStatus/CharacterStatus';
import { Heart } from 'shared/components/Heart';
import {
  Description,
  HeartWrap,
  Img,
  MainInfo,
  Name,
  StyledLink,
  StyledNumber,
  Wrap,
} from './CharacterCard.styled';
import { favcharacters } from 'shared/constants/libaryListName';

export const CharacterCard = props => {
  const location = useLocation();
  const { id, name, species, gender, status, image, isFavourire } = props;

  return (
    <StyledLink to={`/${characters}/${id}`} state={{ from: location }}>
      <HeartWrap>
        <Heart
          id={id}
          isFavourire={isFavourire}
          libraryListName={favcharacters}
        />
      </HeartWrap>
      <Img src={image} width="289" height="289" alt={name} loading="lazy" />
      <Wrap>
        <MainInfo>
          <CharacterStatus status={status} />
          <Name>{nameNormalize(name)}</Name>
        </MainInfo>
        <Description>
          {spiecesNormalize(species)} | {gender}
        </Description>
        <StyledNumber>#{id}</StyledNumber>
      </Wrap>
    </StyledLink>
  );
};
