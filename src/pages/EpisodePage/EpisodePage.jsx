import { Helmet } from 'react-helmet-async';
import { useOneEpisode } from 'hooks/useOneEpisode';
import { useLocation, useParams } from 'react-router';
import { home } from 'shared/constants/routes';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { scrollUp } from 'shared/utils/scrollUp';
import { getEpisodeById } from 'redux/episode/thunks';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { Section } from 'shared/styles/components/Section.styled';
import { Container } from 'shared/styles/components/Container.styled';
import { GoBackLink } from 'shared/components/GoBackLink';
import { CardsList } from 'shared/components/CardsList';
import { CharacterCard } from 'modules/Characters/components/CharacterCard';
import { Episode } from 'modules/Episodes/components/Episode/Episode';
import { images } from 'modules/Episodes/api.img/api.img';
import { getRandomIndex } from 'shared/utils/getRandomIndex';
import { EpisodeDecor, EpisodeWrap, StyledH2 } from './EpisodePage.styled';
import { getCharactersByIds } from 'redux/characters/thunks';
import { useCharacters } from 'hooks/useCharacters';

const NUMBER_OF_CHARS_TO_SKIP = 42;

const EpisodePage = () => {
  const randomId = useMemo(() => getRandomIndex(images.length), []);
  const image = images[randomId];
  const { episode, isLoading, error } = useOneEpisode();
  const { characters } = useCharacters();
  const { episodeId } = useParams();
  const location = useLocation();
  const path = location.state?.from ?? home;

  const dispatch = useDispatch();

  useEffect(() => {
    scrollUp(0);
    dispatch(getEpisodeById(episodeId));
  }, [dispatch, episodeId]);

  useEffect(() => {
    const charactersID = episode.characters.map(character =>
      character.slice(NUMBER_OF_CHARS_TO_SKIP)
    );
    dispatch(getCharactersByIds(charactersID));
  }, [dispatch, episode.characters]);

  const shouldShowEpisode = episode !== null && !error;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>
          {isLoading
            ? error && 'Character'
            : !error && nameNormalize(episode?.name)}
        </title>
      </Helmet>
      <Section>
        <Container>
          <GoBackLink to={path} />
        </Container>
      </Section>
      <Section>
        <Container>
          {shouldShowEpisode && (
            <EpisodeDecor>
              <EpisodeWrap>
                <Episode image={image} />
              </EpisodeWrap>
            </EpisodeDecor>
          )}
        </Container>
        {shouldShowError && <div>Oops, something went wrong...</div>}
      </Section>
      <Section>
        <Container>
          <StyledH2>Characters from the episode</StyledH2>
          <CardsList items={characters} element={CharacterCard} />
        </Container>
      </Section>
    </>
  );
};

export default EpisodePage;
