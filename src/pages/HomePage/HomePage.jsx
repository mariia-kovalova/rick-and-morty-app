import { Helmet } from 'react-helmet-async';
import { Home } from 'modules/Home';


const HomePage = () => {
  return (
    <>
    
      <Helmet>
        <title>Rick and Morty App</title>
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
