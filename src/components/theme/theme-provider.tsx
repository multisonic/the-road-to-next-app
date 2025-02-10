import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // disableTransitionOnChanve
    >
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
