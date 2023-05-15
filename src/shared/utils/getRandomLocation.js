export const getRandomLocation = () => {
  const LOCATION_NUMBER = 126;
  const rndLocationID = Math.floor(Math.random() * LOCATION_NUMBER) + 1;
  return rndLocationID;
};
