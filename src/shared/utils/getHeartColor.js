export const getHeartColor = ({
  isFavourite,
  theme: { hightlight, bgcHoverFocus },
}) => (isFavourite ? hightlight : bgcHoverFocus);
