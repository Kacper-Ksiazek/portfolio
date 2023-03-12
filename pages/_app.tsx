import "@/styles/fonts.css";
// Types
import type { AppProps } from "next/app";
// Other components
import MuiThemeProvider from "@/material/MuiThemeProvider";
// Styled components
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);
    return (
        <MuiThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MuiThemeProvider>
    );
}

export default MyApp;
