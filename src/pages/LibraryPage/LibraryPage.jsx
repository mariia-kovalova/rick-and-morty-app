import { Helmet } from 'react-helmet-async';
import { Library } from 'modules/Layout/Library';

const LibraryPage = () => {
  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <div>LibraryPage</div>
      <Library />
    </>
  );
};

export default LibraryPage;