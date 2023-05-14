import { Characters } from 'modules/Characters';
import { Helmet } from 'react-helmet-async';

const CharactersPage = () => {
  return (
    <>
      <Helmet>
        <title>Characters</title>
      </Helmet>
      <Characters />
    </>
  );
};

export default CharactersPage;
