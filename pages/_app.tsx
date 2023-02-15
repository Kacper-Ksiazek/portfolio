import "@/styles/general.css";
// Types
import type { AppProps } from "next/app";
// Other components
import MuiThemeProvider from "@/material/MuiThemeProvider";
// Styled components
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MuiThemeProvider>
    );
}

export default MyApp;
