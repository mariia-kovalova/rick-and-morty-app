import PropTypes from 'prop-types';

export const RadioBtnField = ({ id, inputName, value, label, register }) => {
  return (
    <div>
      <input id={id} type="radio" value={value} {...register(inputName)} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

RadioBtnField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
