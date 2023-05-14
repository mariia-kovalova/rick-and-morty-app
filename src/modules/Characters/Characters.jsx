import { Section } from 'shared/styles/components/Section.styled';
import { Container } from 'shared/styles/components/Container.styled';
import { RandomCharacter } from './components/RandomCharacter/RandomCharacter';
import { Filter } from './components/Filter/Filter';
import { CharactersList } from './components/CharactersList/CharactersList';

export const Characters = () => {
  return (
    <>
      <Section>
        <Container>
          <RandomCharacter />
        </Container>
      </Section>
      <Section>
        <Container>
          <Filter />
        </Container>
      </Section>
      <Section>
        <Container>
          <CharactersList />
        </Container>
      </Section>
    </>
  );
};
