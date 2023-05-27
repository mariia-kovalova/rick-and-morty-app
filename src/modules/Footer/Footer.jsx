import { Container } from 'shared/styles/components/Container.styled';
import { StyledDiv, StyledFooter, Support } from './Footer.styled';
import sprite from '../../shared/icons/sprite.svg';
import { LogoPS } from 'shared/components/LogoPS/LogoPS';
import { LogoBW } from 'shared/components/Logo/LogoBW';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledDiv>
          <LogoBW />

          <div className="container-madeBy">
            <div className="container-madeBy__logo">
              <p>© 2023 | All Rights Reserved</p>
              <div>
                <p>Developed by </p>
                <LogoPS />
              </div>
            </div>
          </div>
          <div className="container-support">
            <svg width="50" height="50">
              <use href={`${sprite}#icons8-summer-smith`} />
            </svg>
            <Support
              href="https://itis.netlify.app/info"
              target="_blank"
              rel="noreferrer noopener"
            >
              Support PixelSquad
            </Support>
          </div>
        </StyledDiv>
      </Container>
    </StyledFooter>
  );
};
