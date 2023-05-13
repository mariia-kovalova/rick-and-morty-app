import { Global, ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from 'redux/theme/selectors';
import { light } from 'shared/constants/theme';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';

export const CustomThemeProvider = ({ children }) => {
  const mode = useSelector(selectThemeMode);

  return (
    <ThemeProvider theme={mode === light ? lightTheme : darkTheme}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  );
};
