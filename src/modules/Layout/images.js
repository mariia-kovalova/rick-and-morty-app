import {
  characters,
  episodes,
  library,
  locations,
} from 'shared/constants/routes';
import blue_50percent from 'shared/images/blue_50percent.png';
import green_50percent from 'shared/images/green_50percent.png';
import red_50percent from 'shared/images/red_50percent.png';
// import purple_50percent from 'shared/images/purple_50percent.png';
import bw_50percent from 'shared/images/bw_50percent.png';
console.log(bw_50percent);
export const images = [
  { pathname: characters, url: blue_50percent },
  { pathname: locations, url: green_50percent },
  { pathname: episodes, url: red_50percent },
  { pathname: library, url: bw_50percent },
];
