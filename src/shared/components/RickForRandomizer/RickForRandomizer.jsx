import sprite from 'shared/icons/sprite.svg';
import { useLocation } from 'react-router';
import { characters, episodes, locations } from 'shared/constants/routes';
import { RicksText, SvgRick, Wrap } from './RickForRandomizer.styled';

export const RickForRandomizer = ({ showOnDeviceWidth }) => {
  const location = useLocation();

  const getText = location => {
    switch (location.pathname) {
      case `/${characters}`:
        return 'character';
      case `/${episodes}`:
        return 'episode';
      case `/${locations}`:
        return 'location';
      default:
        return 'data';
    }
  };

  return (
    <Wrap showOnDeviceWidth={showOnDeviceWidth}>
      <SvgRick width="100" height="100">
        <use href={`${sprite}#icons8-rick-sanchez`} />
      </SvgRick>
      <RicksText>
        Yeah, just get a random {getText(location)} ...whatever
      </RicksText>
    </Wrap>
  );
};
