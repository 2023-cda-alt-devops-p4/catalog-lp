import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  HandleTheme: () => {},
});
type Props = {
  children: React.ReactNode;
};

export type IThemeContext = {
  theme: string;
  HandleTheme: () => void;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  const HandleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      HandleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
