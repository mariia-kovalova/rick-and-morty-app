import { Helmet } from 'react-helmet-async';
import { Characters } from 'modules/Characters';

const CharactersPage = () => {
  return (
    <>
      <Helmet>
        <title>Characters</title>
      </Helmet>
      <div>CharactersPage</div>
      <Characters />
    </>
  );
};

export default CharactersPage;
