import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { LibraryNav } from './components/LibraryNav/LibraryNav';

export const Library = () => {
  return (
    <Section>
      <Container>
        <LibraryNav />
      </Container>
    </Section>
  );
};
