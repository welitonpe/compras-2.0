import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			light: "#85beff",
			main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000",
		},
	},
});
type ThemeContextProviderProps = {
	children: JSX.Element;
};
const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
	children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeContextProvider;
