import { useLocation } from 'react-router';
import { CradInfoText, FlexInfo } from './EpisodeCardInfo.styled';
import { episodeNameNoramlize } from 'shared/utils/episodeNameNormalize';
import { episodes } from 'shared/constants/routes';

export const EpisodeCardInfo = ({ episode }) => {
  const location = useLocation();
  const { id, name, episode: episodeCode, air_date } = episode;

  const info = [
    location.pathname === `/${episodes}/${id}`
      ? name
      : episodeNameNoramlize(name),
    air_date,
    episodeCode,
  ];
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
