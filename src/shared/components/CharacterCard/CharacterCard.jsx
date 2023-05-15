import { home } from 'shared/constants/routes';
import {
  Description,
  Img,
  Name,
  Number,
  Status,
  StyledLink,
  Wrap,
} from './CharacterCard.styled';
import { Tooltip } from '../ToolTip';
import { nameNormalize } from 'shared/utils/nameNormalize';
import { spiecesNormalize } from 'shared/utils/spiecesNormalize';

export const CharacterCard = props => {
  const { id, name, species, gender, status, image } = props;

  return (
    <StyledLink to={home}>
      <Img src={image} width="289" height="289" alt={name} loading="lazy" />
      <Wrap>
        <Tooltip text={status}>
          <Status marker={status} />
        </Tooltip>
        <Name>{nameNormalize(name)}</Name>
        <Description>
          {spiecesNormalize(species)} | {gender}
        </Description>
        <Number>#{id}</Number>
      </Wrap>
    </StyledLink>
  );
};