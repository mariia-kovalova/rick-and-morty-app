import { BgImg, Text } from './Error.styled';

export const Error = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <BgImg />
    </>
  );
};
