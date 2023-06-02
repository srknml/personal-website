import React, { useContext } from "react";

// Create a context for theming
const ThemeContext = React.createContext();

// Create a provider for components to consume and subscribe to changes
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);

  const toggle = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggle,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Hook for child components to get the theme object ...
// ... and re-render when it changes.
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
