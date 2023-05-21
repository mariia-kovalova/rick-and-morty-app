import { FlexInfo } from '../../Episodes.styled';
import { TextInfo } from '../WrapperCard/WrapperCard.styled';

const EpisodeCardInfo = ({ name, date, number}) => {
  // const { name, air_date, episode: number } = episode;
  console.log(name);
  return (
    <FlexInfo>
      <TextInfo>
        <h3>
          Episode name: <span>{name}</span>
        </h3>
      </TextInfo>
      <TextInfo>
        <h3>
          Episode: <span>{number}</span>
        </h3>
      </TextInfo>
      <TextInfo>
        <h3>
          Air date: <span>{date}</span>
        </h3>
      </TextInfo>
    </FlexInfo>
  );
};

export default EpisodeCardInfo;
