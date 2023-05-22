import PropTypes from 'prop-types';
import { Input, Label } from './RadioBtnField.styled';

export const RadioBtnField = ({ id, inputName, value, label, register }) => {
  return (
    <>
      <Input id={id} type="radio" value={value} {...register(inputName)} />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

RadioBtnField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
