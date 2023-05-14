import { Container } from 'shared/styles/components/Container.styled';
import { HiddenTittle, SectionHome, StyledBtn, StyledDiv } from './Home.styled';

export const Home = () => {
  return (
    <SectionHome>
      <HiddenTittle>Rick and Morty Teleport</HiddenTittle>
      <Container>
        <StyledDiv className="container">
          <div className="container-left"></div>
          <div className="container-right"></div>
          <div className="container-button">
            <StyledBtn type="button">teleport</StyledBtn>
          </div>
        </StyledDiv>
      </Container>
    </SectionHome>
  );
};
