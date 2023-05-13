import { Helmet } from 'react-helmet-async';
import { Locations } from 'modules/Locations';

const LocationPage = () => {
  return (
    <>
      <Helmet>
        <title>Locations</title>
      </Helmet>
      <div>LocationPage</div>
      <Locations />
    </>
  );
};

export default LocationPage;
