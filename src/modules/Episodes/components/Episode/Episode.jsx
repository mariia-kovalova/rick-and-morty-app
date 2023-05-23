import { useOneEpisode } from 'hooks/useOneEpisode';
import { EpisodeCardInfo } from '../EpisodCardInfo/EpisodeCardInfo';
import { HeartWrap, Img, StyledNumber, Wrap } from './Episode.style';
import { Heart } from 'shared/components/Heart';
import { favepisodes } from 'shared/constants/libaryListName';

export const Episode = ({ image }) => {
  const { episode } = useOneEpisode();
  const { id, isFavourite, name } = episode;

  return (
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
  );
};
