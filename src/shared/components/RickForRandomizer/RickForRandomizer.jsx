import sprite from 'shared/icons/sprite.svg';
import { RicksText, SvgRick, Wrap } from './RickForRandomizer.styled';

export const RickForRandomizer = ({ showOnDeviceWidth }) => {
  return (
    <Wrap showOnDeviceWidth={showOnDeviceWidth}>
      <SvgRick width="100" height="100">
        <use href={`${sprite}#icons8-rick-sanchez`} />
      </SvgRick>
      <RicksText>Yeah, just get a random character ...whatever</RicksText>
    </Wrap>
  );
};
