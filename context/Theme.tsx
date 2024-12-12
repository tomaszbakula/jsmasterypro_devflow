import { ThemeProvider, ThemeProviderProps } from "next-themes";

export default function Theme({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
