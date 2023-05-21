import { useEpisodes } from 'hooks/useEpisodes';
import { Wrap, Selected, Option } from './SearchEpisodes.styled';

export const SearchEpisodes = () => {
 
const {episodes} = useEpisodes();
  
  
  
  return (
    <>
      <Wrap>
        <Selected defaultValue="Choose episode...">
        {episodes.map(({id, episode}) => <Option key={id}>{episode}</Option> )}
          
          
        </Selected>
      </Wrap>
    </>
  );
};
