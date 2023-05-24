import { Helmet } from 'react-helmet-async';
import { Library } from 'modules/Library';
import { Outlet } from 'react-router';

const LibraryPage = () => {
  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <Library />
      <Outlet />
    </>
  );
};

export default LibraryPage;
