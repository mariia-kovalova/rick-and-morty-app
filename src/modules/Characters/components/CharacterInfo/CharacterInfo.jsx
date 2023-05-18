import React from 'react';
import {
  Img,
  MainInfo,
  Name,
  NameWrap,
  StyledNumber,
} from './CharacterInfo.styled';
import { CharacterStatus } from '../CharacterStatus/CharacterStatus';
import { CharacterInfoList } from '../CharacterInfoList/CharacterInfoList';

export const CharacterInfo = ({ info = [], links = [], character }) => {
  const { id, name, status, image } = character;

  return (
    <>
      <MainInfo>
        <StyledNumber>#{id}</StyledNumber>
        <Img src={image} width="235" height="235" alt={name} loading="lazy" />
        <NameWrap>
          <CharacterStatus status={status} animate={true} />
          <Name>{name}</Name>
        </NameWrap>
      </MainInfo>
      <CharacterInfoList info={info} links={links} />
    </>
  );
};
