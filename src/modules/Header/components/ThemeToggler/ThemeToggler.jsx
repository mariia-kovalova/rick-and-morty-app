import { useDispatch, useSelector } from 'react-redux';
import { selectThemeMode } from 'redux/theme/selectors';
import { setThemeMode } from 'redux/theme/slice';
import { dark, light } from 'shared/constants/theme';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import sprite from 'shared/icons/sprite.svg';
import { Tooltip } from 'shared/components/ToolTip';

export const ThemeToggler = () => {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setThemeMode(mode === light ? dark : light));
  };

  return (
    <>
      <Tooltip
        text="change theme mode"
        ariaLabel="theme toggler"
        position="down"
      >
        <ToggleButton onClick={handleThemeChange}>
          <ThemeIcon>
            <use
              href={
                mode === light ? `${sprite}#icon-moon` : `${sprite}#icon-sun`
              }
            />
          </ThemeIcon>
        </ToggleButton>
      </Tooltip>
    </>
  );
};
