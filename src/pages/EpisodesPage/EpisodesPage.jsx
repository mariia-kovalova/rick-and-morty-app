import { Helmet } from 'react-helmet-async';
import { Episodes } from 'modules/Episodes';

const EpisodesPage = () => {
  return (
    <>
      <Helmet>
        <title>Episodes</title>
      </Helmet>
      <Episodes />
    </>
  );
};

export default EpisodesPage;
