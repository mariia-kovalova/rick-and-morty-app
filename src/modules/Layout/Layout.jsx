import { Footer } from 'modules/Footer';
import { Header } from 'modules/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
