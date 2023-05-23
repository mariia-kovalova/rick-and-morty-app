import { CradInfoText, FlexInfo } from './EpisodeCardInfo.styled';
import { episodeNameNoramlize } from 'shared/utils/episodeNameNormalize';

export const EpisodeCardInfo = ({ episode }) => {
  const { name, episode: episodeCode, air_date } = episode;

  const info = [episodeNameNoramlize(name), air_date, episodeCode];
  return (
    <FlexInfo>
      {info.map(data => (
        <li key={data}>
          <CradInfoText>{data}</CradInfoText>
        </li>
      ))}
    </FlexInfo>
  );
};
