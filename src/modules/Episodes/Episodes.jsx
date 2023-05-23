import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { SearchEpisodes } from './components/SearchEpisodes/SearchEpisodes';
import { EpisodeCardList } from './components/EpisodeCardList/EpisodeCardList';
import { RandomEpisode } from './components/RandomEpisode/RandomEpisode';
import { StyledH1 } from './Episodes.styled';

export const Episodes = () => {
  return (
    <>
      <Section>
        <Container>
          <StyledH1>Episodes</StyledH1>
          <RandomEpisode />
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
