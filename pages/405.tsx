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
                <title>405 | Method not allowed</title>
            </Head>

            <HTTPStatusCode
                code={405} //
                title="method not allowed"
                explanation="The method specified in the request is not allowed for the resource identified by the request URI."
            />
        </>
    );
};

export default Home;
