import { images } from 'modules/Episodes/api.img/api.img';
import { getRandomIndex } from 'shared/utils/getRandomIndex';
import { EpisodeCardInfo } from '../EpisodCardInfo/EpisodeCardInfo';
import {
  HeartWrap,
  Img,
  StyledLink,
  StyledNumber,
  Wrap,
} from './EpisodeCard.styled';
import { Heart } from 'shared/components/Heart';
import { favepisodes } from 'shared/constants/libaryListName';
import { useMemo } from 'react';
import { episodes } from 'shared/constants/routes';
import { useLocation } from 'react-router';

export const EpisodeCard = ({ episode }) => {
  const location = useLocation();
  const randomId = useMemo(() => getRandomIndex(images.length), []);
  const image = images[randomId];

  const { id, name, isFavourite } = episode;

  return (
    <StyledLink to={`/${episodes}/${id}`} state={{ from: location }}>
      <Wrap>
        <Img
          src={image}
          alt={`episode ${name}`}
          width="430"
          height="242"
          loading="lazy"
        />
        <EpisodeCardInfo episode={episode} />
        <StyledNumber>#{id}</StyledNumber>
        <HeartWrap isFavourite={isFavourite}>
          <Heart
            id={id}
            isFavourite={isFavourite}
            libraryListName={favepisodes}
          />
        </HeartWrap>
      </Wrap>
    </StyledLink>
  );
};
