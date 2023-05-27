import { Dna } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <Dna visible={true} height="40%" width="40%" ariaLabel="dna-loading" />
    </Overlay>
  );
};
