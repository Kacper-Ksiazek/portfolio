// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
import HTTPStatusCode from "@/components/pages/http_status_code";
// Styled components

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>500 | Internal Server Error</title>
            </Head>

            <HTTPStatusCode
                code={500} //
                title="Internal Server Error"
                explanation="The server encountered an internal error or misconfiguration and was unable to complete your request."
            />
        </>
    );
};

export default Home;
