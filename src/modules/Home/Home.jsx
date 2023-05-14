import { Container } from 'shared/styles/components/Container.styled';
import { HiddenTittle, SectionHome, StyledDiv } from './Home.styled';

export const Home = () => {
  return (
    <SectionHome>
      <HiddenTittle>Rick and Morty Teleport</HiddenTittle>
      <Container>
        <StyledDiv className="container">
          <div className="container-left"></div>
          <div className="container-right"></div>
          <div class="button-wrap">
            <button type="button" class="clicker">
              teleport
            </button>
            <div class="circle"></div>
          </div>
        </StyledDiv>
      </Container>
    </SectionHome>
  );
};
