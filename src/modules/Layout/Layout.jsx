import { Footer } from 'modules/Footer';
import { Header } from 'modules/Header';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Wrap, Main } from './Layout.styled';
import { images } from './images';
import color_50percent from 'shared/images/color_50percent.png';
import { ScrollUpBtn } from 'shared/components/ScrollUpBtn';

const DEFAULT_IMAGE_URL = color_50percent;

export const Layout = () => {
  const location = useLocation();
  const [bgurl, setBgurl] = useState(DEFAULT_IMAGE_URL);

  useEffect(() => {
    const imageArr = images.filter(({ pathname }) =>
      location.pathname.includes(pathname)
    );
    setBgurl(imageArr[0]?.url ?? DEFAULT_IMAGE_URL);
  }, [location]);

  return (
    <Wrap url={bgurl}>
      <Header />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />

      <ScrollUpBtn />
    </Wrap>
  );
};
