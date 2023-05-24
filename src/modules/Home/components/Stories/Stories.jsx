import React, { useEffect, useState } from 'react';
import { randomStories } from 'shared/data/randomStories';
import { useOneLocation } from 'hooks/useOneLocation';
import { useOneCharacter } from 'hooks/useOneCharacter';

export const Stories = ({ storyTextID }) => {
  const { location } = useOneLocation();
  const { character } = useOneCharacter();
  const [storyCharacter, setStoryCharacter] = useState('Stranger');
  const [storyLocation, setStoryLocation] = useState('Weird Planet');

  useEffect(() => {
    setStoryLocation(location.name);
    if (character.name === 'Rick Sanchez' || character.name === 'Morty Smith') {
      setStoryCharacter('Stranger');
    } else {
      setStoryCharacter(character.name);
    }
  }, [location, character]);

  const randomStories1 = randomStories[storyTextID]
    .replaceAll('[location name]', storyLocation)
    .replaceAll('[character name]', storyCharacter);

  return <div>{randomStories1}</div>;
};
