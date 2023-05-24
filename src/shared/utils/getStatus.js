import { alive, dead, unknown } from 'shared/constants/characterStatus';

export const getStatus = ({ theme, marker }) => {
  switch (marker) {
    case alive:
      return theme.alive;
    case dead:
      return theme.dead;
    case unknown:
      return theme.unknown;
    default:
      return theme.unknown;
  }
};
