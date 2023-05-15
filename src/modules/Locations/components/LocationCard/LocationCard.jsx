import React, { useEffect, useState } from 'react';
import {
  Description,
  Img,
  Infobox,
  Name,
  Number,
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
        <Img
          src={residentImage}
          width="289"
          height="289"
          alt="location"
          loading="lazy"
        />
        <Infobox>
          <Name className="location-card__name">{location.name}</Name>
          <Name>Type: {location.type}</Name>
          <Name>Dimension: {location.dimension}</Name>
          <Name>Number of residents: {location.residents.length}</Name>
        </Infobox>
      </Description>

      <Wrap>
        <Number>{location.id}</Number>
      </Wrap>
    </StyledLink>
  );
};
