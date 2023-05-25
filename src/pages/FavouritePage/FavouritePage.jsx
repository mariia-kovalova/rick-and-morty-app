import { useLibrary } from 'hooks/useLibrary';
import { CharactersList } from 'modules/Library/components/CharactersList/CharactersList';
import { EpisodeCardList } from 'modules/Library/components/EpisodeCardList/EpisodeCardList';
import { LocationsList } from 'modules/Library/components/LocationsList/LocationsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCharactersByIds } from 'redux/characters/thunks';
import { getEpisodesByIds } from 'redux/episodes/thunks';
import { getLocationsByIds } from 'redux/locations/thunks';
import {
  favcharacters,
  favepisodes,
  favlocations,
} from 'shared/constants/libaryListName';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';

const FavouritePage = () => {
  const { listName } = useParams();
  const { favCharactersIds, favEpisodesIds, favLocationsIds } = useLibrary();
  const dispatch = useDispatch();

  const isCharacters = listName === favcharacters;
  const isEpisodes = listName === favepisodes;
  const isLocations = listName === favlocations;

  useEffect(() => {
    if (favCharactersIds.length > 0)
      dispatch(getCharactersByIds(favCharactersIds));
    if (favEpisodesIds.length > 0) dispatch(getEpisodesByIds(favEpisodesIds));
    if (favLocationsIds.length > 0)
      dispatch(getLocationsByIds(favLocationsIds));
  }, [dispatch, favCharactersIds, favEpisodesIds, favLocationsIds]);

  return (
    <Section>
      <Container>
        <>
          {isCharacters && <CharactersList />}
          {isEpisodes && <EpisodeCardList />}
          {isLocations && <LocationsList />}
        </>
      </Container>
    </Section>
  );
};

export default FavouritePage;
