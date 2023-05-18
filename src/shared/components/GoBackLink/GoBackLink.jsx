import { StyledLink, Svg } from './GoBackLink.styled';
import sprite from 'shared/icons/sprite.svg';

export const GoBackLink = props => {
  return (
    <StyledLink {...props}>
      <Svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-left-small`} />
      </Svg>
      Go back
    </StyledLink>
  );
};
