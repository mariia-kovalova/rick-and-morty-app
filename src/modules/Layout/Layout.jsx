// import { Footer } from 'modules/Footer';
// import { Header } from 'modules/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Wrap, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrap>
      {/* <Header /> */}
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      {/* <Footer /> */}
    </Wrap>
  );
};
