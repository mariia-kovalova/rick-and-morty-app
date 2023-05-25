import { useEpisodes } from 'hooks/useEpisodes';
import { Loader } from 'shared/components/Loader';
import { Item, List } from './EpisodeCardList.styled';
import { EpisodeCard } from 'modules/Episodes/components/EpisodeCard/EpisodeCard';
import { StyledH2 } from 'modules/Library/Library.styled';
import { useLibrary } from 'hooks/useLibrary';

export const EpisodeCardList = () => {
  const { favEpisodesIds } = useLibrary();
  const { episodes, error, isLoading } = useEpisodes();

  const shouldRenderList = favEpisodesIds.length > 0 && !error;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <StyledH2>Favourite episodes</StyledH2>
      {isLoading && <Loader />}
      {shouldRenderList ? (
        <List>
          {episodes.map(episode => (
            <Item key={episode.id}>
              <EpisodeCard episode={episode} />
            </Item>
          ))}
        </List>
      ) : (
        <div>There is nothing on this list</div>
      )}
      {shouldShowError && <div>Oops, something went wrong </div>}
    </>
  );
};
