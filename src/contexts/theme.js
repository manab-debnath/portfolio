import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    isDarkMode: false,
	toggleDarkMode: (isDarkMode) => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
	return useContext(ThemeContext);
}
