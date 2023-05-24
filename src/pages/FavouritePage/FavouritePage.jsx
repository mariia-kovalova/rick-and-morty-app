import { useLocation, useParams } from 'react-router';

const FavouritePage = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location.pathname);
  return <div>FavouritePage</div>;
};

export default FavouritePage;
