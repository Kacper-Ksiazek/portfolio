// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
// Styled components
import HTTPStatusCode from "@/components/pages/http_status_code";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>408 | Request timeout</title>
            </Head>

            <HTTPStatusCode
                code={408} //
                title="request timeout"
                explanation="The server timed out waiting for the request."
            />
        </>
    );
};

export default Home;
