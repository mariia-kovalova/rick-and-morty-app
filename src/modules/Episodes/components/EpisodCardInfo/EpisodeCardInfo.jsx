import { FlexCard } from '../../Episodes.styled';
import { TextInfo } from '../EpisodeCard/EpisodeCard.styled';


const EpisodeCardInfo = ({ episode }) => {
  const { name, air_date, episode: number } = episode;
  console.log(name);
  return (
    <FlexCard>
      <TextInfo>
        <h3>Episode name: {name}</h3>
      </TextInfo>
      <TextInfo>
        <p>Air date: {air_date}</p>
      </TextInfo>
      <TextInfo>
        <p>Episode: {number}</p>
      </TextInfo>
    </FlexCard>
  );
};

export default EpisodeCardInfo;
