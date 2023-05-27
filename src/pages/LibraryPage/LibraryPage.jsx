import { Helmet } from 'react-helmet-async';
import { Library } from 'modules/Library';
import { Outlet, useNavigate } from 'react-router';
import { Suspense, useEffect } from 'react';
import { library } from 'shared/constants/routes';
import { favcharacters } from 'shared/constants/libaryListName';
import { StyledH1 } from './LibraryPage.styled';

const LibraryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${library}/${favcharacters}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <StyledH1>Library</StyledH1>
      <Library />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LibraryPage;
