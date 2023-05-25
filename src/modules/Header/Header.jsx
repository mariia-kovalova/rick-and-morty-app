import { Logo } from 'shared/components/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv } from './Header.styled';
import { RandomCounter } from './components/RandomCouter/RandomCounter';

export const Header = () => {
  return (
    <header>
      <Container>
        <StyledDiv>
          <div className="container-left">
            <Logo />
            <ThemeToggler />
            <RandomCounter />
          </div>
          <div className="container-right">
            <NavBar />
          </div>
        </StyledDiv>
      </Container>
    </header>
  );
};
