import { characters } from 'shared/constants/routes';
import { useLocation } from 'react-router';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { spiecesNormalize } from 'shared/utils/spiecesNormalize';
import { Tooltip } from '../ToolTip';
import {
  Description,
  Img,
  MainInfo,
  Name,
  Number,
  Status,
  StyledLink,
  Wrap,
} from './CharacterCard.styled';

export const CharacterCard = props => {
  const location = useLocation();
  const { id, name, species, gender, status, image } = props;

  return (
    <StyledLink to={`/${characters}/${id}`} state={{ from: location }}>
      <Img src={image} width="289" height="289" alt={name} loading="lazy" />
      <Wrap>
        <MainInfo>
          <Tooltip text={status} ariaLabel="character status">
            <Status marker={status} />
          </Tooltip>
          <Name>{nameNormalize(name)}</Name>
        </MainInfo>
        <Description>
          {spiecesNormalize(species)} | {gender}
        </Description>
        <Number>#{id}</Number>
      </Wrap>
    </StyledLink>
  );
};
