import { useEpisode } from 'hooks/useEpisode';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisodeById } from 'redux/episode/thunks';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import Card from './components/EpisodeCard/EpisodeCard';
import EpisodeCardInfo from './components/EpisodCardInfo/EpisodeCardInfo';
// import wave from '../../shared/icons/wave.gif';

export const Episodes = () => {
  const { episode, isLoading, error } = useEpisode();
  const dispatchFunc = useDispatch();
  // console.log(episode)
  useEffect(() => {
    dispatchFunc(getEpisodeById(1));
  }, []);

  return (
    <Section>
      <Container>
        {episode && <EpisodeCardInfo episode={episode} />}
        <Card>
          <img src="" alt="" />
        </Card>
        <button>Random Episod</button>
      </Container>
    </Section>
  );
};
