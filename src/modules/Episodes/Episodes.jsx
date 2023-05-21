import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';

import { SearchEpisodes } from './components/SearchEpisodes/SearchEpisodes';
import EpisodeCardList from './components/EpisodeCardList/EpisodeCardList';
import Episode from './components/Episode/Episode';

// import EpisodeCard from './components/EpisodeCard/EpisodeCard';

export const Episodes = () => {
  return (
    <>
      <Section>
        <Container>
          <Episode/>
        </Container>
      </Section>
      <Section>
        <Container>
          <SearchEpisodes />
        </Container>
      </Section>
      <Section>
        <Container>
          <EpisodeCardList />
        </Container>
      </Section>
    </>
  );
};
