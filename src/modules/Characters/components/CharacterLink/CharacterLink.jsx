import { StyledLink, Svg } from './CharacterLink.styled';
import sprite from 'shared/icons/sprite.svg';

export const CharacterLink = ({ children, ...rest }) => {
  return (
    <StyledLink {...rest}>
      {children}
      <Svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-right-small`} />
      </Svg>
    </StyledLink>
  );
};
