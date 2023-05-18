import React from 'react';
import { InfoList, Item, Label } from './CharacterInfoList.styled';
import { CharacterLink } from '../CharacterLink/CharacterLink';

export const CharacterInfoList = ({ info, links = [], isMobile = false }) => {
  return (
    <InfoList isMobile={isMobile}>
      {info.map(({ label, data }) => (
        <Item key={`${label}${isMobile && 'mobile'}`}>
          <Label>{label}</Label>
          <p>{data}</p>
        </Item>
      ))}
      {links.length > 0 &&
        links.map(({ label, data, path }) => (
          <Item key={`${label}${isMobile && 'mobile'}`}>
            <CharacterLink to={path}>
              <Label>{label}</Label>
              <p>{data}</p>
            </CharacterLink>
          </Item>
        ))}
    </InfoList>
  );
};
