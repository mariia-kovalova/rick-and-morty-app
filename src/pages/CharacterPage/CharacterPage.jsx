import { useOneCharacter } from 'hooks/useOneCharacter';
import { CharacterBlock } from 'modules/Characters/components/CharacterBlock/CharacterBlock';
import { EpisodeCardList } from 'modules/Episodes/components/EpisodeCardList/EpisodeCardList';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getCharacterById } from 'redux/character/thunks';
import { getEpisodesByIds } from 'redux/episodes/thunks';
import { GoBackLink } from 'shared/components/GoBackLink/GoBackLink';
import { home } from 'shared/constants/routes';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { scrollUp } from 'shared/utils/scrollUp';
import { StyledH2 } from './CharacterPage.styled';

const NUMBER_OF_CHARS_TO_SKIP = 40;

const CharacterPage = () => {
  const { character, isLoading, error } = useOneCharacter();
  const { characterId } = useParams();
  const location = useLocation();
  const path = location.state?.from ?? home;

  const dispatch = useDispatch();

  useEffect(() => {
    scrollUp(0);
    dispatch(getCharacterById(characterId));
  }, [characterId, dispatch]);

  useEffect(() => {
    const episodesIds = character.episode.map(episode =>
      episode.slice(NUMBER_OF_CHARS_TO_SKIP)
    );
    dispatch(getEpisodesByIds(episodesIds));
  }, [character, dispatch]);

  const shouldShowCharacter = character !== null && !error;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>
          {isLoading
            ? error && 'Character'
            : !error && nameNormalize(character?.name)}
        </title>
      </Helmet>
      <Section>
        <Container>
          <GoBackLink to={path} />
        </Container>
      </Section>
      <Section>
        <Container>{shouldShowCharacter && <CharacterBlock />}</Container>
        {shouldShowError && <div>Oops, something went wrong...</div>}
      </Section>
      <Section>
        <Container>
          <StyledH2>
            Episodes where {character?.name ?? 'the charatcer'} was seen
          </StyledH2>
          <EpisodeCardList />
        </Container>
      </Section>
    </>
  );
};

export default CharacterPage;
