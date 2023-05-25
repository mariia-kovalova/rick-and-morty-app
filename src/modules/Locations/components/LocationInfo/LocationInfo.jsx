import { favlocations } from 'shared/constants/libaryListName';
import { Detail, HeartWrap, StyledH3 } from './LocationInfo.styled';
import { Heart } from 'shared/components/Heart';

export const LocationInfo = ({ location }) => {
  const { id, name, dimension, type, residents, isFavourite } = location;

  return (
    <>
      <StyledH3>{name}</StyledH3>
      <Detail>
        Dimension:
        <span> {dimension}</span>
      </Detail>
      <Detail>
        Type:<span> {type}</span>
      </Detail>
      <Detail>
        Number of residents:
        <span> {residents.length}</span>
      </Detail>
      <HeartWrap isFavourite={isFavourite}>
        <Heart
          id={id}
          isFavourite={isFavourite}
          libraryListName={favlocations}
        />
      </HeartWrap>
    </>
  );
};
