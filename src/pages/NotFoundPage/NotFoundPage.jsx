import { Helmet } from 'react-helmet-async';
import { Container } from 'shared/styles/components/Container.styled';
import {
  Overlay,
  TextNum,
  ImgSize,
  PageContainer,
  H2,
} from './NotFoundPage.styled';
import imgErrorC1 from '../../shared/images/404-c1.png';
import { GoBackLink } from 'shared/components/GoBackLink';
import { useLocation } from 'react-router';

const NotFoundPage = () => {
  const location = useLocation();
  const path = location.state?.from ?? home;
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <Container>
        <PageContainer>
          <H2>Page Not Found </H2>
          <Overlay>
            <TextNum className="first-for">4</TextNum>
            <span>
              {/* <img src={imgErrorCenter} alt="" /> */}
              <ImgSize src={imgErrorC1} alt="" />
            </span>
            <TextNum className="second-for">4</TextNum>
          </Overlay>
          <div><GoBackLink to={path}/></div>
          
        </PageContainer>
      </Container>
    </>
  );
};

export default NotFoundPage;
