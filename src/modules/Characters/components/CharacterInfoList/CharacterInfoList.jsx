import React from 'react';
import { Data, InfoList, Item, Label } from './CharacterInfoList.styled';
import { CharacterLink } from '../CharacterLink/CharacterLink';

export const CharacterInfoList = ({ info, links = [], isMobile = false }) => {
  return (
    <InfoList isMobile={isMobile}>
      {info.map(({ label, data }) => (
        <Item key={`${label}${isMobile && 'mobile'}`}>
          <Label>{label}</Label>
          <Data>{data}</Data>
        </Item>
      ))}
      {links.length > 0 &&
        links.map(({ label, data, path }) => (
          <Item key={`${label}${isMobile && 'mobile'}`}>
            <CharacterLink to={path}>
              <Label>{label}</Label>
              <Data>{data}</Data>
            </CharacterLink>
          </Item>
        ))}
    </InfoList>
  );
};
