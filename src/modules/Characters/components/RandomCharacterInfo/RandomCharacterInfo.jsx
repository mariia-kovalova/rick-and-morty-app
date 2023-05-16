import { Tooltip } from 'shared/components/ToolTip';
import {
  Description,
  FullInfo,
  Img,
  Label,
  Name,
  Number,
  Status,
  Wrap,
} from './RandomCharacterInfo.styled';
import { spiecesNormalize } from 'shared/utils/spiecesNormalize';
import { nameNormalize } from 'shared/utils/nameNormalize';

export const RandomCharacterInfo = ({ character }) => {
  const { id, name, status, image, species, gender, origin, location } =
    character;

  const info = [
    { label: 'species', data: species },
    { label: 'gender', data: gender },
    { label: 'origin', data: origin.name },
    { label: 'location', data: location.name },
  ];

  return (
    <>
      <div>
        <Number>#{id}</Number>
        <Img src={image} width="200" height="200" alt={name} loading="lazy" />
        <Wrap>
          <Tooltip text={status}>
            <Status marker={status} />
          </Tooltip>
          <Name>{nameNormalize(name)}</Name>
        </Wrap>

        <Description>
          {spiecesNormalize(species)} | {gender}
        </Description>
      </div>
      <FullInfo>
        {info.map(({ label, data }) => (
          <li key={label}>
            <Label>{label}</Label>
            <p>{data}</p>
          </li>
        ))}
      </FullInfo>
    </>
  );
};
