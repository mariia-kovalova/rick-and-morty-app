import { NavBar } from './components/NavBar/NavBar';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';

export const Header = () => {
  return (
    <header>
      <ThemeToggler />
      <NavBar />
    </header>
  );
};
