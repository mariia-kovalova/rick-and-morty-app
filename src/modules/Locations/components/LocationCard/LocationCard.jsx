import React, { useEffect, useState } from 'react';
import {
  Description,
  Img,
  ImgWrap,
  Infobox,
  Name,
  Number,
  ResidentsButton,
  StyledLink,
  Wrap,
} from './LocationCard.styled';
import { home } from 'shared/constants/routes';
import image from '../../../../shared/images/locationCard.jpg';
import { useDispatch } from 'react-redux';

export const LocationCard = ({ location, resident }) => {
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
    <StyledLink to={home}>
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
            Type: <p>{location.type}</p>
          </Name>
          <Name>
            Dimension: <p>{location.dimension}</p>
          </Name>
          <Name>
            Number of residents: <p>{location.residents.length}</p>
          </Name>
        </Infobox>
        <ResidentsButton to={home}>Residents</ResidentsButton>
      </Description>
      <Wrap>
        <Number>#{location.id}</Number>
      </Wrap>
    </StyledLink>
  );
};
