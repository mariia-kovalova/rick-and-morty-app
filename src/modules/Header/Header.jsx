import { Logo } from 'shared/components/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <Container>
        <StyledDiv>
          <div className="container-left">
            <Logo />
            <ThemeToggler />
          </div>
          <div className="container-right">
            <NavBar />
          </div>
        </StyledDiv>
      </Container>
    </header>
  );
};
