import { Helmet } from 'react-helmet-async';
import { Library } from 'modules/Library';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

const LibraryPage = () => {
  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <Library />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LibraryPage;
