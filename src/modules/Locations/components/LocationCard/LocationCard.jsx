import { useEffect, useState } from 'react';
import image from 'shared/images/locationCard.jpg';
import { useDispatch } from 'react-redux';
import { favlocations } from 'shared/constants/libaryListName';
import { Heart } from 'shared/components/Heart';
import {
  Description,
  HeartWrap,
  Img,
  ImgWrap,
  Infobox,
  Name,
  Number,
  ResidentsButton,
  StyledDiv,
  Wrap,
} from './LocationCard.styled';

export const LocationCard = ({ location, resident, showResidentsBtn }) => {
  const [residentImage, setResidentImage] = useState(image);
  const dispatch = useDispatch();

  useEffect(() => {
    if (resident) {
      const residentID = resident.slice(42);
      const img = `https://rickandmortyapi.com/api/character/avatar/${residentID}.jpeg`;
      setResidentImage(img);
    }
  }, [dispatch, resident]);

  return (
    <StyledDiv>
      <Description>
        <ImgWrap>
          <Img
            src={residentImage}
            width="289"
            height="289"
            alt="location"
            loading="lazy"
          />
        </ImgWrap>
        <Infobox>
          <Name className="location-card__name">{location.name}</Name>
          <Name>
            Type: <span>{location.type}</span>
          </Name>
          <Name>
            Dimension: <span>{location.dimension}</span>
          </Name>
          <Name>
            Number of residents: <span>{location.residents.length}</span>
          </Name>
        </Infobox>
        {showResidentsBtn && (
          <ResidentsButton type="button">Residents</ResidentsButton>
        )}
      </Description>
      <Wrap>
        <Number>#{location.id}</Number>
      </Wrap>
      <HeartWrap isFavourite={location.isFavourite}>
        <Heart
          id={location.id}
          isFavourite={location.isFavourite}
          libraryListName={favlocations}
        />
      </HeartWrap>
    </StyledDiv>
  );
};
