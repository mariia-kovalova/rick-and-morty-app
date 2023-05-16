import PropTypes from 'prop-types';
import { Button, Svg } from './RandomButton.styled';
import sprite from 'shared/icons/sprite.svg';
import { DotsLoader } from '../DotsLoader';

export const RandomButton = ({ children, isLoading, ...rest }) => {
  return (
    <Button type="button" disabled={isLoading} {...rest}>
      {isLoading ? (
        <DotsLoader />
      ) : (
        <>
          {children}
          <Svg width="20" height="20">
            <use href={`${sprite}#icon-rotate-solid`} />
          </Svg>
        </>
      )}
    </Button>
  );
};

RandomButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
