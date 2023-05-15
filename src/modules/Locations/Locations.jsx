import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { StyledH1 } from './Locations.styled';
import { LocationPicker } from './components/LocationPicker/LocationPicker';
import { LocationsList } from './components/LocationsList/LocationsList';

export const Locations = () => {
  return (
    <>
      <Section>
        <Container>
          <StyledH1>Locations</StyledH1>
          <LocationPicker />
        </Container>
      </Section>
      <Section>
        <Container>
          <LocationsList />
        </Container>
      </Section>
    </>
  );
};
