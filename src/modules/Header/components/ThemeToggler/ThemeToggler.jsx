import sprite from 'shared/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeMode } from 'redux/theme/selectors';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import { setThemeMode } from 'redux/theme/slice';
import { dark, light } from 'shared/constants/theme';

export const ThemeToggler = () => {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setThemeMode(mode === light ? dark : light));
  };

  return (
    <div>
      <ToggleButton onClick={handleThemeChange}>
        <ThemeIcon>
          <use
            href={mode === light ? `${sprite}#icon-moon` : `${sprite}#icon-sun`}
          />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};
