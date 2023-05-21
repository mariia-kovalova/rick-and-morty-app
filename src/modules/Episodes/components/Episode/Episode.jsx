import sprite from 'shared/icons/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisodeById } from 'redux/episode/thunks';
import { getRandomIndex } from 'shared/utils/getRandomIndex';
import { RandomButton } from 'shared/components/RandomButton';
import { images } from 'modules/Episodes/api.img/api.img';
import { useOneEpisode } from 'hooks/useOneEpisode';
import WrapperCard from '../WrapperCard/WrapperCard';
import EpisodeCardInfo from '../EpisodCardInfo/EpisodeCardInfo';

const Episode = () => {
  const [image, setImage] = useState(images[0].image);
  const { episode, isLoading } = useOneEpisode();
  const dispatchFunc = useDispatch();

  useEffect(() => {
    dispatchFunc(getEpisodeById(1));
  }, [dispatchFunc]);

  const handleRandomEpisode = () => {
    //рандомное число
    const randomId = getRandomIndex(images.length);
    setImage(images[randomId].image);
  };
  return (
    <WrapperCard>
      {episode && <EpisodeCardInfo episode={episode} />}
      <img
        src={image}
        className="img-episode"
        alt=""
        width="450px"
        height="100%"
      />
      <div className="random-episod">
        <svg width="100" height="100">
          <use href={`${sprite}#icons8-rick-sanchez`} />
        </svg>
        <p>Yeah, just go to the random episode ...whatever</p>
        <RandomButton onClick={handleRandomEpisode} isLoading={isLoading}>
          Random Episode
        </RandomButton>
      </div>
    </WrapperCard>
  );
};

export default Episode;
