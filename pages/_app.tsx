// Tools
import "@/styles/general.css";
import theme from "@/material";
// Types
import type { AppProps } from "next/app";
// Material UI Components
import { ThemeProvider } from "@mui/material";
// Styled components
// import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
