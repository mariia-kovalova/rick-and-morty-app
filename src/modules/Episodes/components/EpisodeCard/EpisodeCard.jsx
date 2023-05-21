import { CardWrapper, ImgWrap } from './EpisodeCard.styled';
import jpg from '../../../../shared/images/locationCard.jpg';
import EpisodeCardInfo from '../EpisodCardInfo/EpisodeCardInfo';

const EpisodeCard = ({episode}) => {
  const { name, air_date, episode: number } = episode;
  return (
    <CardWrapper>
      <ImgWrap>
        <img src={jpg} alt="" />
      </ImgWrap>
      <EpisodeCardInfo 
        name={name}
        date={air_date}
        namber={number}
      />
      <div></div>
    </CardWrapper>
  );
};

export default EpisodeCard;
