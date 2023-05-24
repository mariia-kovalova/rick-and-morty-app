import { StyledLink, Svg } from './LibraryLink.styled';
import sprite from 'shared/icons/sprite.svg';

export const LibaryLink = ({ children, ...rest }) => {
  return (
    <StyledLink {...rest}>
      <Svg width="30" height="30">
        <use href={`${sprite}#icon-heart-icon`} />
      </Svg>
      {children}
    </StyledLink>
  );
};
