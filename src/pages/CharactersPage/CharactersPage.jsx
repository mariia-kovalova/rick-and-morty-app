import { Helmet } from 'react-helmet-async';
import { Characters } from 'modules/Characters';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCharacters } from 'redux/characters/thunks';
import { useCharacters } from 'hooks/useCharacters';

const CharactersPage = () => {
  const { info, characters, isLoading, error } = useCharacters();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  console.log(characters);
  console.log(info);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Helmet>
        <title>Characters</title>
      </Helmet>
      <div>CharactersPage</div>
      <Characters />
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};

export default CharactersPage;
