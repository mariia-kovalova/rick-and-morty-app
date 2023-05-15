import { useEffect, useState } from 'react';
import { useCharacter } from 'hooks/useCharacter';
import { useDispatch } from 'react-redux';
import { RandomButton } from 'shared/components/RandomButton';
import { getCharacterById } from 'redux/character/thunks';

export const RandomCharacter = () => {
  const { character, isLoading, error } = useCharacter();
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  const handleGetRandomCharacter = () => {
    setId(2);
    //generate random id
  };

  const shouldShowCharacter = character !== null && !isLoading && !error;
  const shouldShowError = !isLoading && error;

  return (
    <>
      <div>
        {isLoading && <div>Loading...</div>}
        {shouldShowCharacter && <div>{character.name}</div>}
        {shouldShowError && <div>Oops, something went wrong...</div>}
      </div>
      <RandomButton onClick={handleGetRandomCharacter}>
        Random Character
      </RandomButton>
    </>
  );
};
