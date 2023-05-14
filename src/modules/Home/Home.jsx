import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { HiddenTittle } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <HiddenTittle>Rick and Morty Teleport</HiddenTittle>
      <Container>Home</Container>
    </Section>
  );
};
