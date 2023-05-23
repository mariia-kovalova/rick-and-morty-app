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
import { tablet } from 'shared/constants/deviceSizes';
import { Link } from 'react-router-dom';
import {
  RandomEpisodeDecor,
  RandomEpisodeWrap,
  Randomizer,
} from './RandomEpisode.styled';

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
  }, [dispatchFunc, id]);

  const handleRandomEpisode = () => {
    const randomId = getRandomId({ max: info.count });
    setId(randomId);
    const randomIndex = getRandomIndex(images.length);
    setImage(images[randomIndex]);
  };

  const shouldShowEpisode = episode !== null && !error;

  return (
    <RandomEpisodeDecor>
      <RandomEpisodeWrap>
        <Link to={`/${episodes}/${id}`} state={{ from: location }}>
          {shouldShowEpisode && <Episode image={image} />}
        </Link>
        <Randomizer>
          <RickForRandomizer showOnDeviceWidth={tablet} />
          <RandomButton onClick={handleRandomEpisode} isLoading={isLoading}>
            Random Episode
          </RandomButton>
        </Randomizer>
      </RandomEpisodeWrap>
    </RandomEpisodeDecor>
  );
};
