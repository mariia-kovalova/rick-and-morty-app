import { Logo } from 'shared/components/Logo';
import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv, StyledFooter } from './Footer.styled';
import sprite from '../../shared/icons/sprite.svg';
import { LogoPS } from 'shared/components/LogoPS/LogoPS';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledDiv>
          <div className="container-logo">
            <Logo />
          </div>

          <div className="container-madeBy">
            <div className="container-madeBy__logo">
              <p>Made by </p>
              <LogoPS />
            </div>

            <a href="https://github.com/mariia-kovalova/rick-and-morty-app">
              [ Github ]
            </a>
          </div>
          <div className="container-support">
            <svg width="50" height="50">
              <use href={`${sprite}#icons8-summer-smith`} />
            </svg>
            <a href="https://itis.netlify.app/info">Support PixelSquad</a>
          </div>
        </StyledDiv>
      </Container>
    </StyledFooter>
  );
};
