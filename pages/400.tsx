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
                <title>400 | Bad Request</title>
            </Head>

            <HTTPStatusCode
                code={400} //
                title="bad request"
                explanation="The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax)."
            />
        </>
    );
};

export default Home;
