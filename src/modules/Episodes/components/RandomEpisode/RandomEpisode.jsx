import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisodeById } from 'redux/episode/thunks';
import { getRandomIndex } from 'shared/utils/getRandomIndex';
import { RandomButton } from 'shared/components/RandomButton';
import { images } from 'modules/Episodes/api.img/api.img';
import { useOneEpisode } from 'hooks/useOneEpisode';
import { useLocation } from 'react-router';
import { useEpisodes } from 'hooks/useEpisodes';
import { getRandomId } from 'shared/utils/getRandomId';
import { Episode } from '../Episode/Episode';
import { episodes } from 'shared/constants/routes';
import { RickForRandomizer } from 'shared/components/RickForRandomizer';
import { desktop } from 'shared/constants/deviceSizes';
import {
  EpisodeWrap,
  Randomizer,
  StyledLink,
  Wrap,
} from './RandomEpisode.styled';
import { addToLibrary } from 'redux/library/slice';
import { randomepisodes } from 'shared/constants/libaryListName';
import { CardDecoration } from 'shared/styles/components/CardDecoration.styled';
import randomSound from 'shared/audio/teleport-sound-6.mp3'

const FIRST_EPISODE_ID = 1;

export const RandomEpisode = () => {
  const location = useLocation();
  const { info } = useEpisodes();
  const { episode, isLoading, error } = useOneEpisode();
  const [id, setId] = useState(episode?.id ?? FIRST_EPISODE_ID);
  const [image, setImage] = useState(images[0]);
  const dispatchFunc = useDispatch();

  useEffect(() => {
    dispatchFunc(getEpisodeById(id));
    dispatchFunc(addToLibrary({ libraryListName: randomepisodes, id }));
  }, [dispatchFunc, id]);

  const handleRandomEpisode = () => {
    const audio = new Audio(randomSound);
    audio.play();

    const randomId = getRandomId({ max: info.count });
    setId(randomId);
    const randomIndex = getRandomIndex(images.length);
    setImage(images[randomIndex]);
  };

  const shouldShowEpisode = episode !== null && !error;

  return (
    <Wrap>
      <CardDecoration>
        <EpisodeWrap>
          <StyledLink to={`/${episodes}/${id}`} state={{ from: location }}>
            {shouldShowEpisode && <Episode image={image} />}
          </StyledLink>
        </EpisodeWrap>
      </CardDecoration>
      <Randomizer>
        <RickForRandomizer showOnDeviceWidth={desktop} />
        <RandomButton onClick={handleRandomEpisode} isLoading={isLoading}>
          Random Episode
        </RandomButton>
      </Randomizer>
    </Wrap>
  );
};
