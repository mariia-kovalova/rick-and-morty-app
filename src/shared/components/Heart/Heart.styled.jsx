import styled from '@emotion/styled';

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

const getColor = ({
  isFavourire,
  theme: { hightlightTransparent, bgcHeartTransparent },
}) => (isFavourire ? hightlightTransparent : bgcHeartTransparent);

export const Svg = styled.svg`
  stroke: ${getColor};
  fill: ${getColor};
  transition: trasform 250ms ${({ theme }) => theme.cubic};

  &:hover {
    transform: scale(1.2);
  }
`;
