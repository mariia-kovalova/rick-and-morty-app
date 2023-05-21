import { Section } from 'shared/styles/components/Section.styled';
import { Container } from 'shared/styles/components/Container.styled';
import { RandomCharacter } from './components/RandomCharacter/RandomCharacter';
import { CharactersFilter } from './components/CharactersFilter/CharactersFilter';
import { CharactersList } from './components/CharactersList/CharactersList';
import { FilterSection, StyledH1 } from './Characters.styled';

export const Characters = () => {
  return (
    <>
      <Section>
        <Container>
          <StyledH1>Characters</StyledH1>
          <RandomCharacter />
        </Container>
      </Section>
      <FilterSection>
        <Container>
          <CharactersFilter />
        </Container>
      </FilterSection>
      <Section>
        <Container>
          <CharactersList />
        </Container>
      </Section>
    </>
  );
};
