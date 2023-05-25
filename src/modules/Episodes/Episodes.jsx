import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { StyledH1 } from './Episodes.styled';
import { RandomEpisode } from './components/RandomEpisode/RandomEpisode';
import { SearchEpisodes } from './components/SearchEpisodes/SearchEpisodes';
import { EpisodeCardList } from './components/EpisodeCardList/EpisodeCardList';

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
