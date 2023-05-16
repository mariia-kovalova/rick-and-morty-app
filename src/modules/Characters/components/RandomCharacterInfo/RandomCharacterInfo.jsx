import { Tooltip } from 'shared/components/ToolTip';
import {
  Description,
  FullInfo,
  Img,
  Label,
  MainInfo,
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
      <Number>#{id}</Number>
      <MainInfo>
        <Img src={image} width="205" height="205" alt={name} loading="lazy" />
        <Wrap>
          <Tooltip text={status}>
            <Status marker={status} />
          </Tooltip>
          <Name>{nameNormalize(name)}</Name>
        </Wrap>
        <Description>
          {spiecesNormalize(species)} | {gender}
        </Description>
      </MainInfo>
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
