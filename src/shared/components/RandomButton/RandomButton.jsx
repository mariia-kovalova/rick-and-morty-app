import { Button } from './RandomButton.styled';

export const RandomButton = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
};
