import { useOneEpisode } from 'hooks/useOneEpisode';
import { EpisodeCardInfo } from '../EpisodCardInfo/EpisodeCardInfo';
import {
  HeartWrap,
  Img,
  LoaderWrap,
  StyledNumber,
  Wrap,
} from './Episode.style';
import { Heart } from 'shared/components/Heart';
import { favepisodes } from 'shared/constants/libaryListName';
import { CardLoader } from 'shared/components/CardLoader';

export const Episode = ({ image }) => {
  const { episode, isLoading } = useOneEpisode();
  const { id, isFavourite, name } = episode;

  return (
    <>
      {isLoading ? (
        <LoaderWrap>
          <CardLoader />
        </LoaderWrap>
      ) : (
        <Wrap>
          <StyledNumber>
            <span>Episode </span>#{id}
          </StyledNumber>
          <HeartWrap isFavourite={isFavourite}>
            <Heart
              id={id}
              isFavourite={isFavourite}
              libraryListName={favepisodes}
            />
          </HeartWrap>
          <EpisodeCardInfo episode={episode} />
          <Img src={image} alt={name} width="450" height="200" />
        </Wrap>
      )}
    </>
  );
};
