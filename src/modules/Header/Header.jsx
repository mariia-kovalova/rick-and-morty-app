import { Logo } from 'shared/components/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { Container } from 'shared/styles/components/Container.styled';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <ThemeToggler />
        <NavBar />
      </Container>
    </header>
  );
};
