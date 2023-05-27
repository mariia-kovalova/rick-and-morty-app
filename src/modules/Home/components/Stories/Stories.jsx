import { useEffect, useState } from 'react';
import { randomStories } from 'shared/data/randomStories';
import { useOneLocation } from 'hooks/useOneLocation';
import { useOneCharacter } from 'hooks/useOneCharacter';
import { StyledDiv } from './Stories.styled';

export const Stories = ({ storyTextID }) => {
  const { location } = useOneLocation();
  const { character } = useOneCharacter();
  const [storyCharacter, setStoryCharacter] = useState('Stranger');
  const [storyLocation, setStoryLocation] = useState('Weird Planet');
  const [randomStory, setRandomStory] = useState("Let's get started");
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    setStoryLocation(location?.name);
    if (
      character?.name === 'Rick Sanchez' ||
      character?.name === 'Morty Smith'
    ) {
      setStoryCharacter('Stranger');
    } else {
      setStoryCharacter(character?.name);
    }

    const story = randomStories[storyTextID]
      .replaceAll('[location name]', storyLocation)
      .replaceAll('[character name]', storyCharacter);

    setRandomStory(story);
    setShowDiv(true);

    const timeout = setTimeout(() => {
      setShowDiv(false);
    }, 1000); // Adjust the duration to match your CSS transition duration

    return () => clearTimeout(timeout);
  }, [location, character, storyCharacter, storyLocation, storyTextID]);

  return (
    <StyledDiv
      className={`${showDiv ? 'show' : ''} ${
        storyTextID === 0 ? 'startText' : ''
      }`}
    >
      <span>{randomStory}</span>
    </StyledDiv>
  );
};
