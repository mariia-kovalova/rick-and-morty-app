import { useCharacters } from 'hooks/useCharacters';

export const Characters = () => {
  const data = useCharacters();

  console.log(data);

  return <div>Characters</div>;
};
