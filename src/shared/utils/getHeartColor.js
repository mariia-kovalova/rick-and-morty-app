export const getHeartColor = ({
  isFavourite,
  theme: { hightlight, bgcHeartTransparent },
}) => (isFavourite ? hightlight : bgcHeartTransparent);
