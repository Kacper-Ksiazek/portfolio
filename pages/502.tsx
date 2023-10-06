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
                <title>502 | Bad gateway</title>
            </Head>

            <HTTPStatusCode
                code={502} //
                title="bad gateway"
                explanation="The server was acting as a gateway or proxy and received an invalid response from the upstream server."
            />
        </>
    );
};

export default Home;
